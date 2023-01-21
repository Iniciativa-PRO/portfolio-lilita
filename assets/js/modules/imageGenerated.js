export function imageGenerated(path, totalImage){
    let template = '';

    for (let index = 1; index < totalImage + 1; index++) {
        const element = `
        <div class="gallery__frame">
            <img 
            srcset="../../assets/image/${path}/thumb/${index}.webp"
            src="../../assets/image/${path}/original/${index}.webp"
            alt="" class="gallery__frame__image">
        </div>`

        template = template + element

    }

    return template
}