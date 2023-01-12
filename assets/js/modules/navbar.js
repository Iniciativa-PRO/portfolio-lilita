export function navbar(){
  const header = document.querySelector("header");

  const navbar = `
  <section class="l-container">
    <nav class="c-navbar">
      <img class="c-logo" src="/assets/img/logoValerie.png" alt="Logomarca Valerie Designs" height="40px">

      <ul class="nav__links">
        <li class="nav__list">
          <a class="nav__item" href="/">Accueil</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/page/collaborations/index.html">Collaborations</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/page/formatricedespagnol/index.html">Formatrice d'espagnol</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/page/artsplastiques/index.html">Arts Plastiques</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/page/designgraphique/index.html">Design Graphique</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </section>
  `;

  header.insertAdjacentHTML("afterbegin", navbar);
};

