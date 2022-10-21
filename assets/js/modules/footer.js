export function footer(){
  const header = document.querySelector("footer");

  const footer = `
  <section>
    <section>
      <h2>Rede Sociais</h2>
      <span>Instagram</span>
      <span>Facebook</span>
      <span>Linkedin</span>
    </section>

    <form>
      <h2>Contatos</h2>
      <div>
        <label>Nome</label>
        <input/>
      </div>

      <div>
        <label>Sobrenome</label>
        <input/>
      </div>

      <div>
        <label>E-mail</label>
        <input/>
      </div>

      <div>
        <label>Mensagem</label>
        <textarea rows="4"></textarea>
      </div>

      <button class="c-button">Enviar</button>
    </form>
  </section>

  <section>Copyright</section>
  
  `;

  header.insertAdjacentHTML("afterbegin", footer);
};