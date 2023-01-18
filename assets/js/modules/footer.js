export function footer(){
  return(`
  <footer>
  <section class="l-contact">
    
    <section class="l-fallow-me">
      <h2 class="c-title">Rede Sociais</h2>

      <div class="c-social-media">
        <span>
          <img src="/assets/image/twitter.svg" />
          <a href="#">Twitter</a>
        </span>

        <span>
          <img src="/assets/image/linkedin.svg" />
          <a href="#">Linkedin</a>
        </span>

        <span>
          <img src="/assets/image/facebook.svg" />
          <a href="#">Facebook</a>
        </span>
      </div>
    </section>

    <form id="contact" class="l-form">
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
  </footer>
  `)
};