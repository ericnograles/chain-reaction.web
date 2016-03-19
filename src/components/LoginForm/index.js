import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  render() {
    const { email, password, user, handleEmail, handlePassword, handleLogin } = this.props;
    var buttonText = user.status === 'authenticating' ? 'Logging in...' : 'Login';

    return (
      <div className="form-container horizontal-centered">
        <div className="form-field horizontal-centered">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="email" onChange={handleEmail} />
            <label className="mdl-textfield__label" htmlFor="email">Email address...</label>
          </div>
        </div>
        <div className="form-field horizontal-centered">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="password" id="password" onChange={handlePassword} />
            <label className="mdl-textfield__label" htmlFor="password">Password</label>
          </div>
        </div>
        <div className="form-field horizontal-centered">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={handleLogin}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}