import React from "react";

import "./menu-item.styles.scss";

export default function MenuItem(props) {
  const { title, imageUrl, size } = props.section;
  return (
    <div className={`menu-item ${size ? size : ""}`}>
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
