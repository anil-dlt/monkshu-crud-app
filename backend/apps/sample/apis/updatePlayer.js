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
    const update_player = await updatePlayer(jsonReq);
    if (!update_player) return API_CONSTANTS.API_RESPONSE_FALSE;
    return { result: true, results: { update_player } };
  } catch (error) {
    console.error(error);
    return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
  }
};
const updatePlayer = async (jsonReq) => {
  try {
    //logic for updating Player
    //find the id in data array then update the object
    let reqIndex = findPlayer(jsonReq);
    if (reqIndex >= 0) {
      db["data"].splice(reqIndex, 1, jsonReq);
    } else {
      return "Player id doesn't exists";
    }
    fs.writeFile(
      `${CONSTANTS.APPROOTDIR}/sample/3p/players.json`,
      JSON.stringify(db, null, 2),
      function (err) {
        if (err) throw err;
      }
    );

    if (jsonReq) return db;
  } catch (error) {
    throw error;
  }
};
function findPlayer(jsonReq) {
  let index = -1;
  db["data"].map((ele) => {
    if (jsonReq.id === ele.id) {
      index = db["data"].indexOf(ele);
    }
  });
  return index;
}
const validateRequest = (jsonReq) => jsonReq;
