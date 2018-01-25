
import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...action.payload,
      };
    case types.SET_USER_INFO:
      return {
        ...action.payload,
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
