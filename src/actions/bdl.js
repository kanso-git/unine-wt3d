import axios from 'axios';
import * as types from './types';


const getBuildingList = () =>
  async (dispatch) => {
    console.info('getBuildingList from BDL');
    try {
      const headers = {};
      headers[process.env.BDL_SECURITY_TOKEN] = process.env.BDL_SECURITY_TOKEN_VAL;
      const body = await axios.get(`${process.env.WT3D_API}/bdl/buildings`, {
        headers,
      });
     
      const buildingList = body.data.map(b => ({
        label:`${b.abreviation} (${b.adresseLigne1})`,
        value: b.id,
      }));

      return dispatch({
        type: types.SET_BUILDING_LIST,
        payload: {
          buildingList,
        },
      });
    } catch (e) {
      console.error('getBuildingList auth error', JSON.stringify(e, null, 3));
      if (e.request) {
        console.error(`getBuildingList e.request.status :${e.request.status}`);
      }
      if (e.response) {
        console.error(`getBuildingList e.response.status :${e.response.status}`);
      }
    }
  };

export {
  getBuildingList,
};
