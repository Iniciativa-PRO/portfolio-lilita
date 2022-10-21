export function navbar(){
  const header = document.querySelector("header");

  const navbar = `
  <img src="./assets/img/logoValerie.png" alt="Logomarca Valerie Designs" height="40px">

  <nav>
    <ul>
      <li>Accueil</li>
      <li><a href="page/collaborations/index.html">Collaborations</a></li>
      <li><a href="page/formatricedespagnol/index.html">Formatrice d'espagnol</a></li>
      <li><a href="page/artsplastiques/index.html">Arts Plastiques</a></li>
      <li><a href="page/designgraphique/index.html">Design Graphique</a></li>
      <li><a href="#contact/index.html">Contact</a></li>
    </ul>
  </nav>
  `;

  header.insertAdjacentHTML("afterbegin", navbar);
};