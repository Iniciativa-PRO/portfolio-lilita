import { imageGenerated } from "../../assets/js/modules/imageGenerated.js"

const path = "collaborations"
const totalImage = 16

export function collaborations(){
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