import { imageGenerated } from "../../assets/js/modules/imageGenerated.js"

const path = "arts-plastique"
const totalImage = 24

export function artsplastiques(){
    return(`
    <main>
        <section class="caixa">
            <h2 class="c-title">Arts Plastique</h2>

            <div class="gallery" id="gallery-container">
                ${imageGenerated(path, totalImage)}
            </div>
        </section>
    </main>
    `)
}