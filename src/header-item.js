import React from "react";

import "./header-item.css";

export default class HeaderItem extends React.Component {
  render() {
    return <div className="item">{this.props.text}</div>;
  }
}
