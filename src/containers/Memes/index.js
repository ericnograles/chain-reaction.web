import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as common from 'chain-reaction.common';
import Meme from '../../components/Meme';

class Memes extends Component {
  constructor(props) {
    super(props);

    this.refreshMemes = this.refreshMemes.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(common.actions.findMemes());
  }

  refreshMemes() {
    this.props.dispatch(common.actions.findMemes());
  }

  render() {
    var { memes } = this.props;
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
        {memeImages}
      </div>
    )
  }
}

Memes.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { memes } = state;
  return {
    memes
  };
}

export default connect(mapStateToProps)(Memes);