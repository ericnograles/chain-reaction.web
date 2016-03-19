import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import LoginForm from '../../components/LoginForm';
import * as common from 'chain-reaction.common';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated') {
      browserHistory.push('/sample');
    }
  }

  handleEmail(event) {
    this.props.dispatch(common.actions.keyPressEmail(event.target.value))
  }

  handlePassword(event) {
    this.props.dispatch(common.actions.keyPressPassword(event.target.value));
  }

  handleLogin() {
    const { dispatch, email, password } = this.props;
    dispatch(common.actions.requestLogin(email));
    dispatch(common.actions.login(email, password));
  }

  render() {
    const { email, password, user } = this.props;
    const hasLoginError = this.props.user.error;

    return (
      <div>
        <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Chain Reaction</span>
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" id="search" />
                  <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                </div>
              </div>
            </div>
          </header>
          <div className="demo-ribbon"></div>
          <main className="demo-main mdl-layout__content">
            <div className="demo-container mdl-grid">
              <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
              <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                <LoginForm email={email}
                           password={password}
                           user={user}
                           handleEmail={this.handleEmail}
                           handlePassword={this.handlePassword}
                           handleLogin={this.handleLogin} />
                <div className="login-error">
                  {hasLoginError ? 'Error logging in. ' + this.props.user.error : null}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { email, password, user } = state;
  return {
    email,
    password,
    user
  };
}

export default connect(mapStateToProps)(Home);