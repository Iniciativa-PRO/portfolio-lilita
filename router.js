import { home } from "/page/home/index.js"
import { notfound } from "/page/notfound/index.js"
import { collaborations } from "/page/collaborations/index.js"
import { artsplastiques } from "/page/artsplastiques/index.js"
import { designgraphique } from "/page/designgraphique/index.js"
import { formatricedespagnol } from "/page/formatricedespagnol/index.js"

const routes = {
    'home': home(),
    'collaborations': collaborations(),
    'artsplastiques': artsplastiques(),
    'designgraphique': designgraphique(),
    'formatricedespagnol': formatricedespagnol()
}

export function router(){

    var url = new URL(window.location.href);
    var data = url.searchParams.get("page")

    if(routes.hasOwnProperty(data) || data == null){
        if(data == null){
            return routes.home
        }

        return routes[data]
    } else{
        return notfound()
    }

}
