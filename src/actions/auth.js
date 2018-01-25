import axios from 'axios';
import * as types from './types';

const setUserInfo = user => ({
  type: types.SET_USER_INFO,
  payload: {
    user,
  },
});

const startLogout = () =>
  async (dispatch) => {
    try {
      console.log('startLogout........');
      await axios.delete(`${process.env.WT3D_API}/users/me/token`, {
        headers: {
          'x-auth': localStorage.getItem('token'),
        },
      });
      localStorage.removeItem('token');
      return dispatch({
        type: types.LOGOUT,
        payload: {},
      });
    } catch (e) {
      console.error('startLogout auth error', JSON.stringify(e, null, 3));
      if (e.request) {
        console.error(`startLogout e.request.status :${e.request.status}`);
      }
      if (e.response) {
        console.error(`startLogout e.response.status :${e.response.status}`);
      }
    }
  };

const startLogin = (username, password) =>
  async (dispatch) => {
    try {
      console.log('startLogin........');
      const body = await axios.post(`${process.env.WT3D_API}/users/login`, {
        username,
        password,
      });
      const user = body.data;
      const token = body.headers['x-auth'];
      localStorage.setItem('token', token);
      return dispatch({
        type: types.LOGIN,
        payload: {
          user,
        },
      });
    } catch (e) {
      console.error('startLogin auth error', JSON.stringify(e, null, 3));
      if (e.request) {
        console.error(`startLogin e.request.status :${e.request.status}`);
      }
      if (e.response) {
        console.error(`startLogin e.response.status :${e.response.status}`);
      }
    }
  };

export {
  startLogin,
  setUserInfo,
  startLogout,
};
