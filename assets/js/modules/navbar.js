export function navbar(){
  return (`
  <header>
  <section class="l-container">
    <nav class="c-navbar">
      <img class="c-logo" src="/assets/image/logoValerie.webp" alt="Logomarca Valerie Designs" height="40px">

      <ul class="nav__links">
        <li class="nav__list">
          <a class="nav__item" href="/">Accueil</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/?page=collaborations">Collaborations</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/?page=formatricedespagnol">Formatrice d'espagnol</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/?page=artsplastiques">Arts Plastiques</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="/?page=designgraphique">Design Graphique</a>
        </li>

        <li class="nav__list">
          <a class="nav__item" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </section>
  </header>
  `)
};

