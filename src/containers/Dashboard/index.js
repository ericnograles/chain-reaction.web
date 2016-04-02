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
    <div>
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Chain Reaction</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <input type="button" value="Log Out" onClick={this.handleLogout} />
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
          {memeImages}
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
  const { user, memes } = state;
  return {
    user,
    memes
  };
}

export default connect(mapStateToProps)(Dashboard);