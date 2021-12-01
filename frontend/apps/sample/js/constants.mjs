const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "sample";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
export const APP_CONSTANTS = {
  FRONTEND,
  BACKEND,
  APP_PATH,
  APP_NAME,
  PLAYERS_HTML: APP_PATH + "/players.html",
  SESSION_NOTE_ID: "com_monkshu_ts",
  API_PLAYERSLIST: `${BACKEND}/apis/players`,
  API_CREATEPLAYER: `${BACKEND}/apis/create-player`,
  API_UPDATEPLAYER: `${BACKEND}/apis/update-player`,
  API_DELETEPLAYER: `${BACKEND}/apis/delete-player`,
  USERID: "id",
  USER_ROLE: "user",
  GUEST_ROLE: "guest",
  PERMISSIONS_MAP: {
    user: [APP_PATH + "/players.html", $$.MONKSHU_CONSTANTS.ERROR_THTML],
    guest: [
      APP_PATH + "/players.html",
      $$.MONKSHU_CONSTANTS.ERROR_THTML,
    ],
  },
  API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
  KEY_HEADER: "X-API-Key",
};
