export function navbar(){
  const header = document.querySelector("header");

  const navbar = `
  <img src="./assets/img/logoValerie.png" alt="Logomarca Valerie Designs" height="40px">

  <nav>
    <ul>
      <li>Accueil</li>
      <li>Collaborations</li>
      <li>Formatrice d'espagnol</li>
      <li>Arts Plastiques</li>
      <li>Design Graphique</li>
      <li>Contact</li>
    </ul>
  </nav>
  `;

  header.insertAdjacentHTML("afterbegin", navbar);
};