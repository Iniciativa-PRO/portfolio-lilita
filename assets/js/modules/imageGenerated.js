export function imageGenerated(path, totalImage){

    for (let index = 1; index < totalImage + 1; index++) {
        const template = `
        <div class="gallery__item">
            <img 
            srcset="${path}thumb/${index}.webp"
            src="${path}original/${index}.webp"
            alt="" class="gallery-items">
        </div>
        `
    
        document.querySelector("#gallery-container").insertAdjacentHTML("afterbegin", template)
    }
}