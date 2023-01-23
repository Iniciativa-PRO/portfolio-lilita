export function footer(){
  return(`
  <footer>
  <section class="l-contact">
    
    <section class="l-fallow-me">
      <h2 class="c-title">Réseaux sociaux</h2>

      <div class="c-social-media">
        <span>
          <i class="fa-brands fa-twitter"></i>
          <a href="#">Twitter</a>
        </span>

        <span>
          <i class="fa-brands fa-linkedin-in"></i>
          <a href="https://www.linkedin.com/in/valerie-de-felice-a7b101214/">Linkedin</a>
        </span>

        <span>
          <i class="fa-brands fa-facebook-f"></i>
          <a href="#">Facebook</a>
        </span>
      </div>
    </section>

    <form id="contact" class="l-form">
      <h2 class="c-title">Contacts</h2>

      <div class="c-input__container">
        <input class="c-input" placeholder=" "/>
        <label class="c-input__label">Nom</label>
      </div>

      <div class="c-input__container">
        <input class="c-input" placeholder=" "/>
        <label class="c-input__label">Nom de famille</label>
      </div>

      <div class="c-input__container">
        <input class="c-input" type="email" placeholder=" " />
        <label class="c-input__label">E-mail</label>
      </div>

      <div class="c-input__container">
        <textarea class="c-textarea" type="message" placeholder=" "></textarea>
        <label class="c-input__label">Message</label>
      </div>

      <button class="c-button">Envoyer</button>
    </form>
  </section>

  <section class="c-copyright">&copy; Copyright</section>
  </footer>
  `)
};