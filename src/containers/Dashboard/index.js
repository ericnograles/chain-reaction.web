import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as common from 'chain-reaction.common';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  handleLogout() {
    this.props.dispatch(common.actions.logout());
    delete localStorage['CR_PROFILE'];
    browserHistory.replace('/');
  }

  render() {
    var { user } = this.props;
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Chain Reaction</span>
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        onClick={this.handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </header>
          <div className="demo-ribbon"></div>
          <main className="demo-main mdl-layout__content">
            <div className="demo-container mdl-grid">
              <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
              <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                The Chains they be Reactin'
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(Dashboard);