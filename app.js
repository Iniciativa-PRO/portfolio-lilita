import { navbar } from "/components/navbar.js";
import { footer } from "/components/footer.js";
import { router } from "/router.js";

function app(){
    return(`
        ${navbar()}
        ${router()}
        ${footer()}
    `)
}

document.querySelector("#app").insertAdjacentHTML("afterbegin", app())