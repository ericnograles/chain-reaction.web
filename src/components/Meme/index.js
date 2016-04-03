import React, { Component } from "react";

import { MemeTemplate } from './template';

export default class Meme extends Component {
  render() {
    var { url } = this.props;
    return MemeTemplate(this);
  }
}