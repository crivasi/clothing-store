import React from "react";

import "./menu-item.styles.scss";

import { withRouter } from "react-router-dom";

function MenuItem(props) {
  const { title, imageUrl, size, linkUrl } = props.section;
  const { history, match } = props;
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
