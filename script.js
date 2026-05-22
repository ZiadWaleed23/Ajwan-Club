/* ============================================
   نادي أجوان الرياضي - ملف الجافاسكريبت
   ============================================ */

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');
  let currentSection = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    }
  });
}

// ===== HERO SLIDER =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('sliderPrev');
const nextBtn = document.getElementById('sliderNext');

let currentSlide = 0;
let sliderInterval;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(sliderInterval);
  startAutoSlide();
}

// Button controls
prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

// Dot controls
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    goToSlide(index);
    resetAutoSlide();
  });
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const heroSection = document.querySelector('.hero');

heroSection.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

heroSection.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) { nextSlide(); }
    else { prevSlide(); }
    resetAutoSlide();
  }
});

// Start auto-slide
startAutoSlide();

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Staggered delay for sibling elements
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((sibling, i) => {
        if (sibling === entry.target) {
          delay = i * 120;
        }
      });

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== CONTACT FORM =====
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');
const formInputs = document.querySelectorAll('.form-input');

submitBtn.addEventListener('click', () => {
  // Basic validation
  let isValid = true;
  formInputs.forEach(input => {
    if (input.type !== 'select-one' && input.value.trim() === '') {
      isValid = false;
      input.style.borderColor = '#e05555';
      setTimeout(() => {
        input.style.borderColor = '';
      }, 2000);
    }
  });

  if (isValid) {
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'إرسال الرسالة';
      submitBtn.disabled = false;
      formSuccess.classList.add('show');
      // Reset inputs
      formInputs.forEach(input => {
        if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
          input.value = '';
        }
      });
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }, 1500);
  }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 72;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(el, target, suffix = '') {
  const start = 0;
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const current = Math.floor(eased * target);
    el.textContent = (current > 1000 ? '+' : '') + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = (target > 999 ? '+' : '') + target + suffix;
  }

  requestAnimationFrame(update);
}

// Trigger counter when stats bar is visible
const statsBar = document.querySelector('.stats-bar');
const statNums = document.querySelectorAll('.stat-num');

let countersStarted = false;

const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    const values = [5000, 7, 15, ''];
    const suffixes = ['', '', '', '24/7'];

    statNums.forEach((el, i) => {
      if (typeof values[i] === 'number') {
        animateCounter(el, values[i], '');
      }
    });
  }
}, { threshold: 0.5 });

if (statsBar) statsObserver.observe(statsBar);

// ===== KEYBOARD NAVIGATION FOR SLIDER =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { nextSlide(); resetAutoSlide(); }
  if (e.key === 'ArrowRight') { prevSlide(); resetAutoSlide(); }
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 50);
});
