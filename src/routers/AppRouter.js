import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Wt3dDashboardPage from '../components/Wt3dDashboardPage';
import AddWt3dPage from '../components/AddWt3dPage';
import EditWt3dPage from '../components/EditWt3dPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={Wt3dDashboardPage} />
        <PrivateRoute path="/create" component={AddWt3dPage} />
        <PrivateRoute path="/edit/:id" component={EditWt3dPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
