# aaPanel + Docker ile Self-Hosting Rehberi

Bu doküman, projeyi kendi sunucunuzda **aaPanel** ve **Docker** kullanarak yayınlamak için adım adım ilerlemenizi sağlar. Adımlar Ubuntu tabanlı bir sunucu üzerinde test edilmiştir; diğer dağıtımlarda küçük farklar olabilir.

---

## 1. Ön Koşullar

- aaPanel kurulu ve panele erişiminiz var.
- Sunucuda `root` veya sudo yetkili kullanıcı hesabı.
- Yayınlamak istediğiniz bir domain (ör. `app.domain.com`).
- Domain DNS yönetimine erişim (A kaydı eklemek için).
- Projenin kaynak koduna erişim (Git repo veya zip).

> **Not:** aaPanel kurulumu henüz yapılmadıysa [resmi kurulum rehberini](https://www.aapanel.com/install.html) takip edin. Ubuntu 20.04/22.04 önerilir.

---

## 2. Sunucu Hazırlığı

### 2.1 aaPanel Terminaline Erişim

1. aaPanel web arayüzüne giriş yapın.
2. Sol menüden **Terminal** veya **SSH** seçeneğini kullanın. Alternatif olarak sunucuya doğrudan SSH ile bağlanabilirsiniz.

### 2.2 Paket Güncelleme

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.3 Docker ve Docker Compose Kurulumu

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

Docker Compose V2, `docker compose` komutuyla birlikte gelir. Kurtarma için:

```bash
sudo apt install docker-compose-plugin -y
```

> Kullanıcı grup değişikliğinin etkili olması için terminalden çıkıp yeniden giriş yapın.

---

## 3. Projenin Sunucuya Alınması

### 3.1 Dizini Oluşturun

```bash
sudo mkdir -p /opt/nonameguard
sudo chown $USER:$USER /opt/nonameguard
cd /opt/nonameguard
```

### 3.2 Kaynak Kodunu Kopyalayın

- **Git ile:**
  ```bash
  git clone <repo-url> .
  ```
- **Zip ile:** Dosyayı aaPanel dosya yöneticisinden veya `wget`/`scp` ile yükleyin, ardından çıkarın.

### 3.3 Çevresel Değişkenler

`/opt/nonameguard` içinde `.env` dosyası oluşturun:

```bash
cat <<'ENV' > .env
NODE_ENV=production
PORT=3000
# API endpoint veya webhook URL’leri varsa ekleyin
LEAD_FORM_WEBHOOK_URL=https://example.com/api/lead
MEETING_FORM_WEBHOOK_URL=https://example.com/api/meeting
FORMS_SHARED_SECRET=değiştirin
ENV```

> **Önemli:** Webhook URL’lerini kendi altyapınıza göre güncelleyin.

---

## 4. Dockerfile Oluşturma

Projede halihazırda Dockerfile yoksa şu içeriği ekleyin (`/opt/nonameguard/Dockerfile`):

```dockerfile
# 1. Derleme aşaması
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Çalışma aşaması
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Gerekli dosyaları kopyala
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components
COPY --from=builder /app/content ./content
COPY --from=builder /app/lib ./lib

RUN npm ci --omit=dev
EXPOSE 3000
CMD ["npx", "next", "start"]
```

> **Not:** Eğer `next.config.ts` yerine `next.config.js` kullanıyorsanız kopyalama satırını uyarlayın.

---

## 5. Docker Compose Yazımı

`/opt/nonameguard/docker-compose.yml` dosyasını oluşturun:

```yaml
services:
  nonameguard:
    build: .
    container_name: nonameguard-app
    env_file:
      - ./.env
    ports:
      - "3000:3000"
    restart: unless-stopped
    networks:
      - web

networks:
  web:
    external: false
```

> `ports` satırında dış portu değiştirmek isterseniz, sağdaki değeri (host port) düzenleyin.

---

## 6. Uygulamayı Docker ile Çalıştırma

```bash
cd /opt/nonameguard
sudo docker compose build
sudo docker compose up -d
```

Çalışma durumunu kontrol etmek için:

```bash
sudo docker compose ps
sudo docker logs -f nonameguard-app
```

Uygulama varsayılan olarak `http://SERVER_IP:3000` üzerinden erişilebilir olmalıdır.

---

## 7. aaPanel Reverse Proxy ve Domain Yönlendirmesi

### 7.1 DNS Ayarı

Domain sağlayıcınızda aşağıdaki A kaydını oluşturun:

| Kayıt | Tür | Değer |
|-------|-----|--------|
| `app` (örnek) | A | sunucunuzun IP adresi |

DNS değişikliklerinin yayılması (propagation) genellikle birkaç dakikadan 1 saate kadar sürebilir.

### 7.2 aaPanel Site Oluşturma

1. aaPanel > **Website** bölümüne gidin.
2. **Add Site** seçeneğini tıklayın.
3. Domain: `app.domain.com` (veya tercihinize göre). PHP desteği gerekmiyor, **Static** tip seçilebilir.
4. Root directory’i `/www/wwwroot/app.domain.com` bırakabilirsiniz (bu katalog reverse proxy için kullanılacak).

### 7.3 Reverse Proxy Tanımlama

1. Website listesinde yeni oluşturduğunuz siteyi bulun, **Set** butonuna tıklayın.
2. **Reverse Proxy** sekmesine geçin.
3. Aşağıdaki bilgileri girin:
   - **Proxy Name:** `nonameguard`
   - **Target URL:** `http://127.0.0.1:3000`
   - **Cache**: Kapalı bırakabilirsiniz.
4. Kaydedin.

### 7.4 SSL Sertifikası

1. Website ayarlarında **SSL** sekmesine gidin.
2. **Let’s Encrypt** seçeneğiyle domaininizi doğrulayın (DNS kayıtları doğru ise otomatik tamamlanır).
3. Sertifika oluşturulduktan sonra `Force HTTPS` seçeneğini aktif edin.

Artık `https://app.domain.com` üzerinden Docker’da çalışan uygulamaya erişebilirsiniz.

---

## 8. Güncelleme ve Dağıtım Süreçleri

### 8.1 Kod Güncelleme

Yeni sürüm deploy etmek için:

```bash
cd /opt/nonameguard
git pull        # veya yeni zip yükleyin
sudo docker compose build --no-cache
sudo docker compose up -d
```

### 8.2 Log ve Sorun Giderme

- Container logları: `sudo docker logs -f nonameguard-app`
- Container shell: `sudo docker exec -it nonameguard-app sh`
- Bağımlılık temizliği: `sudo docker system prune -f`

---

## 9. Yedekleme

- Kaynak kod (`/opt/nonameguard`) ve `.env` dosyasını düzenli yedekleyin.
- aaPanel’in **Cron** modülü ile günlük/haftalık `tar` yedekleri alabilirsiniz.

Örnek cron komutu:

```bash
0 2 * * * tar -czf /www/backup/nonameguard-$(date +\%F).tar.gz -C /opt nonameguard
```

---

## 10. Güvenlik Tavsiyeleri

- Sunucuda gereksiz portları kapatın (`ufw` veya aaPanel Firewall kullanarak).
- Docker container’ını `root` olmayan kullanıcıyla çalıştırmak veya `read-only` filesystem gibi ek güvenlik ayarları değerlendirilmelidir.
- `.env` dosyasını yalnızca gerekli kullanıcıların okuyabileceği şekilde izinlendirin (`chmod 600 .env`).
- Webhook ve API anahtarlarını çevresel değişkenlerde saklayın; repo içine koymayın.

---

## 11. Kontrol Listesi

- [ ] Domain DNS A kaydı sunucuyu gösteriyor.
- [ ] Docker container başarıyla çalışıyor (`docker compose ps`).
- [ ] Reverse proxy `https://app.domain.com` adresine requestleri yönlendiriyor.
- [ ] SSL sertifikası aktif ve HSTS/HTTPS zorlaması açık.
- [ ] PDF ve iletişim linkleri canlı sitede doğru çalışıyor.
- [ ] Yedekleme ve güncelleme süreçleri tanımlandı.

Bu adımları izlediğinizde proje, aaPanel üzerinde Docker container içinde kendi domaininizle yayınlanmış olacaktır. Herhangi bir sorunla karşılaşırsanız Docker loglarını ve aaPanel error loglarını kontrol etmeyi unutmayın.
