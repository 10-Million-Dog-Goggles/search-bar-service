import React from 'react';

var ExploreItem = (props) => {
  return (
    <li className="AJexploreItem">
      <div className={'AJexploreIcon ' + props.icon}></div>
      <div className="AJexploretextsection">
        <div className="AJexplorename">{props.name}</div>
        <div className="AJexploresubtitle">{props.subtitle}</div>
      </div>
    </li>
  );
};

export default ExploreItem;