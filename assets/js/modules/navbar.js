

export function navbar(){
  var url = new URL(window.location.href);
  var data = url.searchParams.get("page")

  return (`
  <header>
  <section class="l-container">
    <nav class="c-navbar">
      <img class="c-logo" src="/assets/image/logoValerie.webp" alt="Logomarca Valerie Designs" height="40px">

      <ul class="nav__links">
        <li class="nav__list ${data == 'home' || data == null ? 'active' : ''}">
          <a class="nav__item" href="/">Accueil</a>
        </li>

        <li class="nav__list ${data == 'collaborations' ? 'active' : ''}">
          <a class="nav__item" href="/?page=collaborations">Collaborations</a>
        </li>

        <li class="nav__list ${data == 'formatricedespagnol' ? 'active' : ''}">
          <a class="nav__item" href="/?page=formatricedespagnol">Formatrice d'espagnol</a>
        </li>

        <li class="nav__list ${data == 'artsplastiques' ? 'active' : ''}">
          <a class="nav__item" href="/?page=artsplastiques">Arts Plastiques</a>
        </li>

        <li class="nav__list ${data == 'designgraphique' ? 'active' : ''}">
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

