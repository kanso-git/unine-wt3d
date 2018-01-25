
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// import './styles/external/bootstrap/4.0.0/bootstrap.min.css';
import { setUserInfo } from './actions/auth';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';


import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

console.log(`app.js  ${JSON.stringify(store.getState(), null, 3)} `);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
const token = localStorage.getItem('token');
const getuserInfo = async () => {
  const headers = {};
  headers['x-auth'] = token;
  try {
    const res = await axios.get(`${process.env.WT3D_API}/users/me`, {
      headers,
    });
    store.dispatch(setUserInfo(res.data));
  } catch (e) {
    console.error('register auth error', JSON.stringify(e, null, 3));
    if (e.request) {
      console.error(`register e.request.status :${e.request.status}`);
    }
    if (e.response) {
      console.error(`register e.response.status :${e.response.status}`);
    }
  }
};

if (token && token.length > 0) {
  console.log('.......dashboard');
  getuserInfo();
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/dashboard');
  }
} else {
  renderApp();
  history.push('/');
}


/*
  store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    */
