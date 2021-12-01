/*
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

//reading n binding data using mustache
const getList = async () => {
  let resp = await apiman.rest(
    APP_CONSTANTS.API_PLAYERSLIST,
    "POST",
    {},
    false,
    true
  );

  if (!resp || !resp.result) router.reload();
  players_list.bindData(resp.results);
};
 const deletePlayer = async (id) => {
  let resp = await apiman.rest(
    APP_CONSTANTS.API_DELETEPLAYER,
    "POST",
    { id: id },
    false,
    true
  );
  console.log(resp);
  router.loadPage(APP_CONSTANTS.PLAYERS_HTML);
  if (!resp || !resp.result) router.reload();
};


//creating a new input html for adding a player
const loadCreatePlayerPage = () => document.querySelector("#content").innerHTML = "<create-player></create-player>";
const uploadCreatePlayerPage = () => document.querySelector("#content").innerHTML = "<update-player></update-player>";

const register = () => {
  // convert this all into a WebComponent so we can use it
  monkshu_component.register(
    "players-list",
    `${APP_CONSTANTS.APP_PATH}/components/players-list/players-list.html`,
    players_list
  );
};
const trueWebComponentMode = false; // making this false renders the component without using Shadow DOM
export const players_list = {
  trueWebComponentMode,
  register,
  getList,
  deletePlayer,
  loadCreatePlayerPage,
  uploadCreatePlayerPage
};
