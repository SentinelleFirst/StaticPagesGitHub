/* Injecte le contenu du menu (dans #menu) et du footer (dans <footer>) au chargement */
document.addEventListener('DOMContentLoaded', () => {
  const MENU_HTML = `
    <a href="index.html" class="logo-gtc">
      <img src="assets/icons/logo.svg" alt="Logo GTC" id="logo">
    </a>
    <button onclick="openMenu()"><img class="btn-open white" src="assets/icons/Menu-white.svg" alt="arrow"><img class="btn-open black" src="assets/icons/Menu-black.svg" alt="arrow"><img class="close" src="assets/icons/Close.svg" alt="arrow"></button>
    <div id="menu-links">
      <div>
        <a href="about.html" style="width: 150px;"><p>A propos</p><img src="assets/icons/Simple-Right.svg" alt="arrow"></a>
        <a href="services.html" style="width: 150px;"><p>Services</p><img src="assets/icons/Simple-Right.svg" alt="arrow"></a>
        <a href="projects.html" style="width: 150px;"><p>Projets</p><img src="assets/icons/Simple-Right.svg" alt="arrow"></a>
      </div>
      <a href="contact.html" class="global-btn">
        Contact
        <img src="assets/icons/Up-Right.svg" alt="arrow">
      </a>
    </div>
  `;

  const FOOTER_HTML = `
  <button id="scrollToTopBtn" title="Go to top">↑</button>
   <div class="footer-top">
        <div class="footer-top-left">
            <img src="assets/icons/logo.svg" alt="Logo GTC" id="logo">
            <p>Faire de vos projets une réalité </p>
        </div>
        <div class="footer-top-right">
            <div class="div-1">
                <a href="about.html">A propos</a>
                <a href="services.html">Services</a>
                <a href="projects.html">Projets</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="adresse">
                <p>09 BP 652 Ouagadougou, Secteur 23, Rue 14/32</p>
                <img src="assets/icons/Location.svg" alt="">
            </div>
            <div class="adresse">
                <p>jb.wema@gmail.com</p>
                <img src="assets/icons/Email.svg" alt="">
            </div>
        </div>
   </div>
   <div class="divider"></div>
   <div class="footer-bottom">
        <div class="socials">
            <a href=""><img src="assets/icons/linkedin.svg" alt=""></a>
            <a href=""><img src="assets/icons/Facebook.svg" alt=""></a>
            <a href=""><img src="assets/icons/X.svg" alt=""></a>
        </div>
        <p>©2025 Global Trading Construction. All Rights Reserved</p>
        <a href="">Terms & privacy</a>
   </div>
  `;

  const menuEl = document.getElementById('menu');
  if (menuEl) menuEl.innerHTML = MENU_HTML;

  const footerEl = document.querySelector('footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
});