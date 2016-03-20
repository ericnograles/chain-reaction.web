import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Hello from '../../components/Hello/Hello';

import * as common from '../../../../chain-reaction.common/src';

class Sample extends Component {
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
    return (
      <Hello name="you guys" handleLogout={this.handleLogout}></Hello>
    )
  }
}

Sample.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(Sample);