import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';

export class LoginPage extends Component {
  state={
    error: null,
    username: '',
    password: '',
  }
  
  onUsernameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState(() => ({ error: 'Please provide username and password.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.startLogin(this.state.username, this.state.password);
      e.target.reset();
    }
  };

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Waytouch 3D</h1>
          <form className="form" onSubmit={this.onSubmit} >
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Login"
              autoComplete="off"
              className="text-input"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              autoComplete="off"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />

            <p> It's time to get your Waytouch under control.</p>
            <button className="button" onClick={this.login} >Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    auth: state.auth,
  });


export default connect(mapStateToProps, { ...authActions })(LoginPage);
