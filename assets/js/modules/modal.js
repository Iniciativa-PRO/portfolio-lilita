
function modal(){
    //um forEachloop em todas as imagens e armazenar a url da imagem
    const images = document.querySelectorAll(".gallery__item img");
    let imgSrc;

    //pegando as imagem com onclick
    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            imgSrc = e.target.src;
            //executar função modal
            imgModal(imgSrc);
        });
    });

    // criando o modal da imagem
    let imgModal = (src) => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        //adicionando o modal à seção principal
        document.querySelector("#app").append(modal);
        //adcionando a imagem ao modal
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);
        
        //criando o botao fechar
        const closeBtn = document.createElement("i");
        closeBtn.setAttribute("class", "fas fa-times c-button__close");

        // funcao fechar
        modal.onclick = () => {
            modal.remove();
        };

        modal.append(newImage, closeBtn);
    };
}

modal()