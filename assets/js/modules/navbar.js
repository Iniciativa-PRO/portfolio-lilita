export function navbar(){
  const header = document.querySelector("header");

  const navbar = `
  <img class="c-logo" src="/assets/img/logoValerie.png" alt="Logomarca Valerie Designs" height="40px">

  <nav class="c-nav-bar">
    <ul class="nav__links">
      <li><a href="/">Accueil</a></li>
      <li><a href="/page/collaborations/index.html">Collaborations</a></li>
      <li><a href="/page/formatricedespagnol/index.html">Formatrice d'espagnol</a></li>
      <li><a href="/page/artsplastiques/index.html">Arts Plastiques</a></li>
      <li><a href="/page/designgraphique/index.html">Design Graphique</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  `;

  header.insertAdjacentHTML("afterbegin", navbar);
};