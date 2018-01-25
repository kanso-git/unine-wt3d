import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/wt3ds';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import bdlReducer from '../reducers/bdl';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      wt3ds: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
      bdl: bdlReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
