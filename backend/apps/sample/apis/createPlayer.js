const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const utils = require(`${API_CONSTANTS.LIB_PATH}/utils`);
const db = require(`${CONSTANTS.APPROOTDIR}/sample/3p/players.json`);
const fs = require("fs");
//const db=require(``)
exports.doService = async (jsonReq) => {
  // Validate API request and check mandatory payload required
  if (!validateRequest(jsonReq)) return;
  API_CONSTANTS.API_INSUFFICIENT_PARAMS;
  try {
    const create_player = await createPlayer(jsonReq);
    if (!create_player) return API_CONSTANTS.API_RESPONSE_FALSE;
    return { result: true, results: { create_player } };
  } catch (error) {
    console.error(error);
    return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
  }
};
const createPlayer = async (jsonReq) => {
  try {
    //logic for creating Player

    db["data"].push(jsonReq);

    fs.writeFile(
      `${CONSTANTS.APPROOTDIR}/sample/3p/players.json`,
      JSON.stringify(db, null, 2),
      function (err) {
        if (err) throw err;
      }
    );

    if (jsonReq) return db['data'];
  } catch (error) {
    throw error;
  }
};
const validateRequest = (jsonReq) => jsonReq;
