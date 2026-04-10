// ============================================
// IMMOSIEGEL – MAIN JS
// ============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(i => {
    if (i !== item) i.classList.remove('open');
  });
  item.classList.toggle('open');
}

// Contact form submit (demo)
function submitForm() {
  const vorname = document.getElementById('vorname');
  const email = document.getElementById('email');
  const interesse = document.getElementById('interesse');
  const nachricht = document.getElementById('nachricht');
  const datenschutz = document.getElementById('datenschutz');

  if (!vorname || !vorname.value.trim()) { alert('Bitte geben Sie Ihren Vornamen ein.'); return; }
  if (!email || !email.value.trim()) { alert('Bitte geben Sie Ihre E-Mail-Adresse ein.'); return; }
  if (!interesse || !interesse.value) { alert('Bitte wählen Sie ein Interesse aus.'); return; }
  if (!nachricht || !nachricht.value.trim()) { alert('Bitte geben Sie eine Nachricht ein.'); return; }
  if (!datenschutz || !datenschutz.checked) { alert('Bitte stimmen Sie der Datenschutzerklärung zu.'); return; }

  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll(
    '.feature-card, .leistung-item, .process-step, .pricing-card, .inv-step, .ziel-card, .info-card'
  );
  animElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
});
