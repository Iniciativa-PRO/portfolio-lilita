import { imageGenerated } from "../../assets/js/modules/imageGenerated.js"

const path = "collaborations"
const totalImage = 16

export function collaborations(){
    return(`
    <main>
        <section class="caixa">
        
            <div class="c-title__description">
                <h2 class="c-title">Collaborations</h2>
    
                <p class="description"> </p>
            </div>

            <div class="gallery" id="gallery-container">
                ${imageGenerated(path, totalImage)}
            </div>
        </section>
    </main>
    `)
}