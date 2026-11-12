# Nida Nur Yiğit — Kişisel Portfolyo Web Sitesi

Bu depo, **Gaziantep İslam Bilim ve Teknoloji Üniversitesi (GİBTÜ)** Bilgisayar Mühendisliği 2. sınıf öğrencisi **Nida Nur Yiğit**'in kişisel web portfolyosunu içerir.

Site, herhangi bir backend veya derleme aracı (bundler) gerektirmeksizin **saf HTML5, CSS3 ve Vanilla JavaScript** ile geliştirilmiş olup **GitHub Pages** üzerinde barındırılmaya %100 uyumludur.

---

## 🚀 Canlı Önizleme & Dağıtım
- **GitHub Pages:** [nidanuryigit.github.io](https://nidanuryigit.github.io) *(veya `username.github.io/repo-name/`)*
- Tüm dosya bağlantıları relative (`./`) formatında yapılandırılmıştır.

---

## 📁 Proje Klasör Mimarisi

```text
nidanuryigit.io/
├── index.html                  # Ana Sayfa (Hero, özet istatistikler, öne çıkan yetkinlikler ve projeler)
├── about.html                  # Hakkımda (Biyografi, eğitim zaman çizelgesi, yetkinlik matrisi, YAZEK editörlüğü)
├── projects.html               # Projelerim (Dinamik filtreleme, teknik detaylar, GitHub repo bağlantıları)
├── contact.html                # İletişim (İletişim bilgileri kartı, sosyal medya ve anlık doğrulamalı form)
├── css/
│   └── style.css               # Modern tasarım sistemi, dark/light tema değişkenleri ve responsive kurallar
├── js/
│   └── main.js                 # Tema kontrolü, mobil hamburger menü, aktif sayfa vurgusu, proje filtreleme
└── assets/
    └── images/                 # Vektörel SVG görselleri ve proje illüstrasyonları
        ├── profile-placeholder.svg
        ├── project-dental.svg
        ├── project-factory.svg
        ├── project-arduino.svg
        └── dergi-yazek.svg
```

---

## 🛠️ Teknik Yetkinlikler & Öne Çıkan Projeler

### 1. Diş Kliniği Randevu ve Yönetim Sistemi
- **Teknolojiler:** Python 3, Tkinter GUI, SQLite3
- **Özellikler:** Hasta kayıt ve arama, doktor takviminde çakışma kontrolü, reçete ve tedavi geçmişi takibi.

### 2. Fabrika Envanter ve Ticaret Otomasyonu
- **Teknolojiler:** C (C99), Binary File I/O, Struct & Pointer mimarisi
- **Özellikler:** Hammadde stok takibi, mamul sevkiyatı, dosya tabanlı kalıcı veri saklama (`fread`/`fwrite`), maliyet & kâr-zarar analizi.

### 3. Arduino Gaz Sensörleri & Neopixel Aydınlatma
- **Teknolojiler:** Arduino Uno (ATmega328P), MQ-2 / MQ-5 gaz sensörleri, WS2812B Neopixel, LDR
- **Özellikler:** Çevresel gaz ve duman eşiği kontrolü, sesli/ışıklı acil alarm mekanizması, ortam ışığına duyarlı dinamik RGB aydınlatma prototipi.

### 4. YAZEK Dijital Dergi — Editör & Sayfa Tasarımı
- **Kapsam:** Bilim, mühendislik ve kültür makalelerinin içerik düzenlemesi, tipografi seçimi ve sayfa mizanpajı.

---

## 🎨 Öne Çıkan Tasarım Özellikleri
- 🌓 **Açık / Koyu Tema (Dark/Light Mode):** `localStorage` ile kullanıcının tema tercihi hatırlanır.
- 📱 **Tamamen Responsive:** Mobil, tablet ve masaüstü ekranlar için optimize edilmiştir.
- ⚡ **Hafif ve Bağımsız:** Harici ağır kütüphanelere ihtiyaç duymaz, anında yüklenir.
- 🎯 **Dinamik Proje Filtreleme:** Vanilla JS ile kategorilere göre anında filtreleme.
