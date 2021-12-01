import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

const updateplayer = async (id) => {
    const payloads = {
         id:id,
        "id": update_player.shadowRoot.querySelector("#id").value,
        "player": update_player.shadowRoot.querySelector("#name").value,
        "nation": update_player.shadowRoot.querySelector("#nation").value,
        "age": update_player.shadowRoot.querySelector("#age").value
    }
    if(payloads) {
        let resp = await apiman.rest(APP_CONSTANTS.API_UPDATEPLAYER, "POST", payloads, false, true);
        if (!resp || !resp.result) router.reload();
    }
    router.loadPage(APP_CONSTANTS.PLAYERS_HTML);
}

//call all other apis API_updateplayerS
function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("update-player", `${APP_CONSTANTS.APP_PATH}/components/update-player/update-player.html`, update_player);
}

const trueWebComponentMode = false;	// making this false renders the component without using Shadow DOM

export const update_player = { trueWebComponentMode, register, updateplayer }