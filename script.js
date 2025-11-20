// Small interaction: mobile nav toggle and form handling
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    if (nav) nav.style.display = expanded ? 'none' : 'block';
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic validation
      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const email = fd.get('email') || '';
      const message = fd.get('message') || '';
      if (!name || !email || !message){
        status.style.color = 'crimson';
        status.textContent = 'Please fill out all fields.';
        return;
      }
      // In a real app submit via fetch to backend or use an email service.
      status.style.color = 'green';
      status.textContent = 'Thanks! Your request has been received. We will contact you shortly.';
      form.reset();
    });
  }
});