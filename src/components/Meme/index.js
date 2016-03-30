import React, { Component } from "react";

export default class Meme extends Component {
  render() {
    var { url } = this.props;
    return (
      <div className="meme-image">
        <img src={url} />
      </div>
    );
  }
}