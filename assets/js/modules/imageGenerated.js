export function imageGenerated(path, totalImage){

    for (let index = 1; index < totalImage + 1; index++) {
        const template = `
        <div class="gallery__item">
            <img 
            srcset="../../assets/image/${path}/thumb/${index}.webp"
            src="../../assets/image/${path}/original/${index}.webp"
            alt="" class="gallery-items">
        </div>
        `
    
        document.querySelector("#gallery-container").insertAdjacentHTML("afterbegin", template)
    }
}