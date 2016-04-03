import React from "react";

export function MemeTemplate(reactClass) {
  var props = reactClass.props;
  return (
    <div className="demo-container mdl-grid">
      <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
        <img src={reactClass.props.url} />
      </div>
    </div>
  );
}