import { home } from "/page/home/index.js"
import { notfound } from "/page/notfound/index.js"
import { collaborations } from "/page/collaborations/index.js"
import { artsplastiques } from "/page/artsplastiques/index.js"
import { designgraphique } from "/page/designgraphique/index.js"
import { formatricedespagnol } from "/page/formatricedespagnol/index.js"

export function router(){

    var url = new URL(window.location.href);
    var data = url.searchParams.get("page")

    if(data == 'home' || data == null){
        return home()
    }

    if(data == 'collaborations'){
        return collaborations()
    }

    if(data == 'artsplastiques'){
        return artsplastiques()
    }

    if(data == 'designgraphique'){
        return designgraphique()
    }

    if(data == 'formatricedespagnol'){
        return formatricedespagnol()
    }
    
    else{
        return notfound()
    }
}
