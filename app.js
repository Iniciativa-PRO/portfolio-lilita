import { navbar } from "./assets/js/modules/navbar.js";
import { footer } from "./assets/js/modules/footer.js";
import { router } from "./router.js";

function app(){
    return(`
        ${navbar()}
        ${router()}
        ${footer()}
    `)
}

document.querySelector("#app").insertAdjacentHTML("afterbegin", app())