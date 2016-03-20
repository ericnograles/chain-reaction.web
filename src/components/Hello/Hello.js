import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    var { name, handleLogout } = this.props;
    return (
      <div className="greeting">
        <p ref="name">
          Hello, {name}!
        </p>
        <input type="button" value="Log Out" onClick={handleLogout} />
      </div>
    );
  }
}