const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const db = require(`${CONSTANTS.APPROOTDIR}/sample/3p/players.json`);
//const db=require(``)
exports.doService = async (jsonReq) => {
  // Validate API request and check mandatory payload required
  if (!validateRequest(jsonReq)) return;
  API_CONSTANTS.API_INSUFFICIENT_PARAMS;
  try {
    const players_list = await getList(jsonReq);
    if (!players_list) return API_CONSTANTS.API_RESPONSE_FALSE;
    return { result: true, results: { players_list } };
  } catch (error) {
    console.error(error);
    return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
  }
};
const getList = async (jsonReq) => {
  try {
    if (jsonReq) return db['data'];
  } catch (error) {
    throw error;
  }
};
const validateRequest = (jsonReq) => jsonReq;
