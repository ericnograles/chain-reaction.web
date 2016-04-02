import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as common from 'chain-reaction.common';
import Meme from '../../components/Meme';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.refreshMemes = this.refreshMemes.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(common.actions.findMemes());
  }

  handleLogout() {
    this.props.dispatch(common.actions.logout());
    delete localStorage['CR_PROFILE'];
    browserHistory.replace('/');
  }

  refreshMemes() {
    this.props.dispatch(common.actions.findMemes());
  }

  render() {
    var { memes, user } = this.props;
    var memeImages;

    if (memes && memes.results) {
      memeImages = memes.results.map(memeUrl => {
        return (
          <Meme url={memeUrl} />
        );
      });
    }
    return (
      <div className="meme-container">
        <div className="welcome">
          Welcome to Chain Reaction, {user.email}
          <input type="button" value="Log Out" onClick={this.handleLogout} />
        </div>
        {memeImages}
      </div>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user, memes } = state;
  return {
    user,
    memes
  };
}

export default connect(mapStateToProps)(Dashboard);