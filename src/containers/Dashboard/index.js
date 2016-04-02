import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as common from 'chain-reaction.common';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(common.actions.logout());
    delete localStorage['CR_PROFILE'];
    browserHistory.replace('/');
  }

  render() {
    var { user } = this.props;
    return (
      <div className="meme-container">
        <div className="welcome">
          Welcome to Chain Reaction, {user.email}
          <input type="button" value="Log Out" onClick={this.handleLogout} />
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