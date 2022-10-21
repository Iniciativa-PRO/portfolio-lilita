export function footer(){
  const header = document.querySelector("footer");

  const footer = `
  <section class="l-contact">
    <section>
      <h2 class="c-title">Rede Sociais</h2>
      <span>Instagram</span>
      <span>Facebook</span>
      <span>Linkedin</span>
    </section>

    <form>
      <h2 class="c-title">Contatos</h2>

      <div class="c-input__container">
        <input class="c-input" placeholder=" "/>
        <label class="c-input__label">Nome</label>
      </div>

      <div class="c-input__container">
        <input class="c-input" placeholder=" "/>
        <label class="c-input__label">Sobrenome</label>
      </div>

      <div class="c-input__container">
        <input class="c-input" type="email" placeholder=" " />
        <label class="c-input__label">E-mail</label>
      </div>

      <div class="c-input__container">
        <textarea class="c-textarea" type="message" placeholder=" "></textarea>
        <label class="c-input__label">Mensagem</label>
      </div>

      <button class="c-button">Enviar</button>
    </form>
  </section>

  <section class="c-copyright">&copy; Copyright</section>
  
  `;

  header.insertAdjacentHTML("afterbegin", footer);
};