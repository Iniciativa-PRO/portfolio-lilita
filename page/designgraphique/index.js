import { imageGenerated } from "../../assets/js/modules/imageGenerated.js"

const path = "design-graphique"
const totalImage = 18

export function designgraphique(){
    return(`
    <main>        

    <section class="caixa">
      <div class="c-title__description">
          <h2 class="c-title">Design Graphique</h2>

          <p class="description">
              Vous pouvez voir ici une sélection de certains de mes petits projets et
              simulations que j'ai réalisés, tels que; flyers, bannières, fond écran
              et logos realicé en Adobe Illustrator et Photoshop dans des formats
              adaptés aux différents réseaux sociaux.
          </p>
      </div>

      <div class="gallery">
        ${imageGenerated(path, totalImage)}
      </div>
    </section>
  </main>
    `)
}