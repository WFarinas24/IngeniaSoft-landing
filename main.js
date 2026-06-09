// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// FAQ toggle
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Form submit — abre el cliente de correo con los datos del formulario
function handleFormSubmit(btn) {
  const nombre  = document.getElementById('cf-nombre').value.trim();
  const empresa = document.getElementById('cf-empresa').value.trim();
  const telefono = document.getElementById('cf-telefono').value.trim();
  const mensaje = document.getElementById('cf-mensaje').value.trim();

  if (!nombre || !mensaje) {
    alert('Por favor completa al menos tu nombre y cuéntanos en qué podemos ayudarte.');
    return;
  }

  const destinatario = 'wfarinasg@gmail.com';
  const asunto = encodeURIComponent(`Cotización IngeniaSoft — ${empresa || nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola, me interesa una cotización.\n\n` +
    `Nombre: ${nombre}\n` +
    `Empresa: ${empresa || '—'}\n` +
    `Teléfono / WhatsApp: ${telefono || '—'}\n\n` +
    `Mensaje:\n${mensaje}`
  );

  window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
}

// Smooth nav link behavior
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
