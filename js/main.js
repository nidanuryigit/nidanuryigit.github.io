/**
 * NİDA NUR YİĞİT - KİŞİSEL PORTFOLYO
 * JavaScript Temel Etkileşimler & Fonksiyonlar
 * - Mobil Menü (Hamburger) Kontrolü
 * - Tema Değiştirici (Dark / Light Mode)
 * - Aktif Sayfa Navigasyon Vurgusu
 * - Proje Filtreleme Sistemi (projects.html)
 * - İletişim Formu Statik Geri Bildirimi (contact.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initActiveNavLink();
  initHeaderScroll();
  initProjectFilter();
  initContactForm();
});

/* ==========================================
   1. TEMA YÖNETİMİ (Dark / Light Mode)
   ========================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const storedTheme = localStorage.getItem('nida_portfolio_theme');
  
  // Varsayılan olarak dark tema, kullanıcı önceden seçmişse o uygulanır
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('nida_portfolio_theme', newTheme);
    });
  });
}

/* ==========================================
   2. MOBİL MENÜ (HAMBURGER)
   ========================================== */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (!hamburger || !mobileNav) return;

  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Mobil menüdeki herhangi bir bağlantıya tıklandığında menüyü kapat
  const mobileLinks = mobileNav.querySelectorAll('.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ESC tuşuna basıldığında menüyü kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================
   3. AKTİF SAYFA BAĞLANTISI VURGUSU
   ========================================== */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Relative path temizleme (./about.html -> about.html)
    const cleanHref = href.replace('./', '');
    
    if (
      cleanHref === currentPath ||
      (currentPath === '' && (cleanHref === 'index.html' || cleanHref === './index.html')) ||
      (currentPath === 'index.html' && cleanHref === 'index.html')
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================
   4. HEADER SCROLL EFEKTİ
   ========================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================
   5. PROJE FİLTRELEME (projects.html)
   ========================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Aktif butonu güncelle
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Kart geçiş animasyonu için dinamik CSS kuralı
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

/* ==========================================
   6. STATİK İLETİŞİM FORMU (contact.html)
   ========================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim() || 'Portfolyo İletişim Mesajı';
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      showFeedback('Lütfen tüm zorunlu alanları doldurunuz.', 'error');
      return;
    }

    // Basit e-posta format doğrulaması
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Lütfen geçerli bir e-posta adresi giriniz.', 'error');
      return;
    }

    // Statik site üzerinde başarılı işlem simülasyonu
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;display:inline-block;animation:spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M4 12a8 8 0 018-8"></path>
      </svg> Gönderiliyor...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.reset();

      showFeedback(
        `Teşekkürler Sayın ${name}! Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğim.`,
        'success'
      );

      // İsteğe bağlı olarak mailto alternatifi tetiklenebilir
      const mailtoLink = `mailto:nidanuryigittt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Gönderen: " + name + " (" + email + ")\n\n" + message)}`;
      console.log('İletişim mailto taslağı:', mailtoLink);
    }, 900);
  });

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
