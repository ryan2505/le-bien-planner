/* Shared nav + footer + reveal-on-scroll + mobile menu for all pages */

function renderNav(activePage) {
  const links = [
    { href: 'index.html',     label: 'Home',      key: 'home' },
    { href: 'about.html',     label: 'About',     key: 'about' },
    { href: 'services.html',  label: 'Services',  key: 'services' },
    { href: 'portfolio.html', label: 'Portfolio', key: 'portfolio' },
    { href: 'booking.html',   label: 'Booking',   key: 'booking' },
    { href: 'contact.html',   label: 'Contact',   key: 'contact' },
  ];

  const desktopLinks = links
    .map(l => `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`)
    .join('');

  const mobileLinks = links
    .map((l, i) =>
      `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">` +
      `<span>${l.label}</span>` +
      `<span class="mn-num">0${i + 1}</span>` +
      `</a>`
    )
    .join('');

  return `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <a href="index.html" class="nav-brand" aria-label="Le Bien Planner Déco — Home">
      <img class="brand-img" src="img/logo-phoenix.png" alt="">
      <span class="brand-word">
        <span><span class="brand-mark">Le Bien</span> Planner</span>
        <span class="brand-sub">— Déco —</span>
      </span>
    </a>
    <div class="nav-links" aria-hidden="true">
      ${desktopLinks}
    </div>
    <div class="nav-end">
      <a href="booking.html" class="nav-cta">Book consultation</a>
      <button
        class="nav-hamburger"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="nav-mobile-menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>
  <div
    class="nav-mobile-menu"
    id="nav-mobile-menu"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation"
  >
    <nav class="mobile-nav-links" aria-label="Mobile navigation">
      ${mobileLinks}
    </nav>
    <div class="mobile-nav-footer">
      <a href="booking.html" class="btn btn-gold">Book consultation <span class="arrow">→</span></a>
      <div class="mobile-contact-line">
        <a href="tel:+14125037799">+1 412 503 7799</a>
        &nbsp;·&nbsp;
        <a href="https://wa.me/14125805809">WhatsApp</a>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <div class="monogram left">
            <img class="mark" src="img/logo-phoenix.png" alt="Le Bien phoenix mark">
            <span class="word">
              <span class="top">Le Bien</span>
              <span class="mid">Planner</span>
              <span class="rule"></span>
              <span class="sub">Déco</span>
            </span>
          </div>
          <p style="margin-top:28px; max-width:340px; font-family:var(--display); font-style:italic; color:var(--ivory-dim); font-size:18px; line-height:1.5;">
            Elevating your moments, creating unforgettable memories.
          </p>
        </div>
        <div>
          <h4>Atelier</h4>
          <ul>
            <li><a href="about.html">Our story</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="booking.html">Booking</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+14125037799">+1 412 503 7799</a></li>
            <li><a href="https://wa.me/14125805809">WhatsApp · 412 580 5809</a></li>
            <li><a href="mailto:info@lebienplannerdeco.com">info@lebienplannerdeco.com</a></li>
            <li>1120 Fox Hill Dr, PA 15146</li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 LeBien Planner Déco · All moments reserved</div>
        <div>Pennsylvania · Established with intention</div>
      </div>
    </div>
  </footer>
  <a class="whatsapp-fab" href="https://wa.me/14125805809" aria-label="WhatsApp" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
  </a>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navHost  = document.getElementById('nav-host');
  const footHost = document.getElementById('footer-host');
  if (navHost)  navHost.outerHTML  = renderNav(navHost.dataset.active);
  if (footHost) footHost.outerHTML = renderFooter();

  /* ── Reveal on scroll ─────────────────────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ── Mobile menu ──────────────────────────────────── */
  const hamburger  = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  if (!hamburger || !mobileMenu) return;

  let menuScrollY = 0;

  function openMenu() {
    menuScrollY = window.scrollY;
    /* iOS momentum-scroll lock: fix body at current scroll position */
    document.body.style.position = 'fixed';
    document.body.style.top      = `-${menuScrollY}px`;
    document.body.style.width    = '100%';
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    /* Restore scroll position */
    document.body.style.position = '';
    document.body.style.top      = '';
    document.body.style.width    = '';
    window.scrollTo(0, menuScrollY);
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  /* Close when a nav link is tapped */
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });

  /* Close if resized to desktop (prevents stuck body:fixed) */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) closeMenu();
  }, { passive: true });
});
