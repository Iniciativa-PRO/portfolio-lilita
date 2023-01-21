import { imageGenerated } from "../../assets/js/modules/imageGenerated.js"

const path = "creativespanishtraining"
const totalImage = 20

export function formatricedespagnol(){
    return(`
    <main>
        <section class="caixa">
            <div class="c-title__description">
                <h2 class="c-title">Formatrice</h2>

                <p class="description"></p>
            </div>

            <div class="gallery" id="gallery-container">
                ${imageGenerated(path, totalImage)}
            </div>
        </section>
    </main>
    `)
}