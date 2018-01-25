import * as types from '../actions/types';

const INITIAL_STATE = { buildingList: [] };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_BUILDING_LIST:
      return { ...action.payload };
    default:
      return state;
  }
};
