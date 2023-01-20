export function notfound(){
    return(`
        <main>
            <section class="c-notfound">
                <img src="/assets/image/notfound.webp"/>
                <h2>Uau, Você foi longe demais!</h2>
                <p>Não encontrei o planeta que procurava</p>
                <a class="c-button" href="/?=home"> 
                    <i class="fa-solid fa-angles-left"></i> 
                    <span> Volte para terra</span>
                </a>
            </section>
        </main>
    `)
}