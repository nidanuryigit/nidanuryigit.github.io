# Proje Tanımı: Kişisel GitHub Pages Portfolyo Web Sitesi

## 1. Genel Bakış ve Amaç
Bu proje, **Nida Nur Yiğit** için hazırlanmış; **GitHub Pages** üzerinde barındırılacak, tamamen statik, hızlı, modern ve duyarlı (responsive) bir kişisel portfolyo web sitesidir. 
Proje herhangi bir backend sunucusu veya derleme aracı (build tool / bundler) gerektirmeden saf **HTML5, CSS3 ve Vanilla JavaScript** kullanılarak geliştirilmelidir.

## 2. Kişisel ve Akademik Profil Bilgileri
Sitedeki metinler ve içerik alanları aşağıdaki gerçek bilgilere göre doldurulmalıdır:
- **Ad Soyad:** Nida Nur Yiğit
- **Ünvan / Rol:** Bilgisayar Mühendisliği 2. Sınıf Öğrencisi
- **Üniversite:** Gaziantep İslam Bilim ve Teknoloji Üniversitesi (GİBTÜ)
- **Teknik Yetkinlikler:** C, Python, C# (Windows Forms), HTML5, CSS3, SQLite, Veri Yapıları ve Algoritmalar, Arduino Uno & Gömülü Sistem Prototipleme (Sensörler, Neopixel LED, Breadboard devreleri).
- **Kişisel Projeler (Örnek Kartlar İçin):**
  1. *Diş Kliniği Randevu ve Yönetim Sistemi:* Python, Tkinter ve SQLite3 kullanılarak geliştirilmiş masaüstü otomasyon uygulaması.
  2. *Fabrika Envanter ve Ticaret Otomasyonu:* C dili ve dosya tabanlı veri depolama mimarisi ile geliştirilmiş yönetim sistemi.
  3. *Arduino Sensör ve Aydınlatma Prototipleri:* MQ-2/MQ-5 gaz sensörleri, LDR ve WS2812B Neopixel LED entegrasyonlu donanım projeleri.
- **Sosyal & Akademik Rol:** YAZEK Dijital Dergi – Editör & Sayfa Tasarımı.

## 3. Dosya ve Klasör Mimarisi
GitHub Pages uyumluluğu için tüm dosya yolları (asset, CSS, JS ve sayfa linkleri) kök dizine göreceli (relative path: `./css/style.css` gibi) olmalıdır:

```text
/
├── index.html          # Ana Sayfa (Hero alanı, kısa özet, öne çıkan yetenekler)
├── about.html          # Hakkımda (Eğitim, teknik yetenekler, editörlük deneyimi, ilgi alanları)
├── projects.html       # Projelerim (Filtrelenebilir proje kartları, GitHub repo linkleri)
├── contact.html        # İletişim (Sosyal medya/GitHub/LinkedIn bağlantıları ve statik iletişim formu)
├── css/
│   └── style.css       # Tüm sayfalar için ortak tasarım sistemi ve responsive kurallar
├── js/
│   └── main.js         # Mobil menü kontrolü, aktif sayfa vurgusu, tema/etkileşimler
└── assets/
    └── images/         # Profil fotoğrafı ve proje görselleri için yer tutucu klasör