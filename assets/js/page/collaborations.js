
function collaborations(){

    const main = document.querySelector(".content")

    const collaborations = `
    <section class="collaborations">
    <div class="collaborations__title">
    
    </div>
    </section>

    <section class="caixa">
    <button class="c-button__dark__mode dark-mode" data-mode="dark">

    </button>

    <div class="c-title__description">
    <h2 class="c-title">Collaborations</h2>

    <p class="description">
        Aqui pueden apreciar los trabajos/encargos/colaboraciones para cuentas comerciales de
        Instagram, Facebook y Whatsapp donde se aprecia el manejo de montaje publicitario, flyers, banners
        y fondo de pantalla realizados con los programas Adobe Illustrator y Photoshop en formatos adaptados
        para diferentes redes sociales.<br><br>
    </p>
    </div>

    <div class="gallery" id="gallery-container">
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/bambiland.png" alt="" class="gallery__item">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/cacadordenoobs.png" alt="" class="gallery__item">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/cafetricolor.png" alt="" class="gallery__item">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/coliseopvp.png" alt="" class="gallery__item">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/edocraft.png" class="gallery__item" alt="">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/entiemporecord.png" class="gallery__item" alt="">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/labarracazem.png" class="gallery__item" alt="">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/mercado.png" class="gallery__item" alt="">
    </div>

    <div class="gallery__item">
        <img src="../../assets/img/collaborations/minecraft.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/mundopixel.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/panacraft.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/pc.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/rangogratis.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/siensiricolor.png" class="gallery__item" alt="">
    </div>
    
    <div class="gallery__item">
        <img src="../../assets/img/collaborations/todosgamers.png" class="gallery__item" alt="">
    </div>
    </div>
    </section>
    `
    
    main.insertAdjacentHTML("afterbegin", collaborations);
}