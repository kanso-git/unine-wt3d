import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/fontawesome-free-solid';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, auth }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Waytouch 3D</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>
          <FontAwesomeIcon icon={faPowerOff} /> Logout ({auth.user.displayName})
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
