import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

const createPlayer = async () => {
    const payloads = {
        "id": create_player.shadowRoot.querySelector("#id").value,
        "player": create_player.shadowRoot.querySelector("#name").value,
        "nation": create_player.shadowRoot.querySelector("#nation").value,
        "age": create_player.shadowRoot.querySelector("#age").value
    }
    if(payloads) {
        let resp = await apiman.rest(APP_CONSTANTS.API_CREATEPLAYER, "POST", payloads, false, true);
        if (!resp || !resp.result) router.reload();
    }
    router.loadPage(APP_CONSTANTS.PLAYERS_HTML);
}

//call all other apis API_createPlayerS
function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("create-player", `${APP_CONSTANTS.APP_PATH}/components/create-player/create-player.html`, create_player);
}

const trueWebComponentMode = false;	// making this false renders the component without using Shadow DOM

export const create_player = { trueWebComponentMode, register, createPlayer }