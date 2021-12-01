const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const db = require(`${CONSTANTS.APPROOTDIR}/sample/3p/players.json`);
const fs = require("fs");
//const db=require(``)
exports.doService = async (jsonReq) => {
  // Validate API request and check mandatory payload required
  if (!validateRequest(jsonReq)) return;
  API_CONSTANTS.API_INSUFFICIENT_PARAMS;
  try {
    const delete_player = await deletePlayer(jsonReq);
    if (!delete_player) return API_CONSTANTS.API_RESPONSE_FALSE;
    return { result: true, results: { delete_player } };
  } catch (error) {
    console.error(error);
    return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
  }
};
const deletePlayer = async (jsonReq) => {
  try {
    //logic for creating Player
    //find the id in data array then remove the object
    db["data"].map((ele) => {
      if (jsonReq.id == ele.id) {
        db["data"].splice(db["data"].indexOf(ele), 1);
      }
    });

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
const validateRequest = (jsonReq) => jsonReq;
