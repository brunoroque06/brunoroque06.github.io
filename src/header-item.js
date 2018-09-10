import React from "react";

import "./header-item.css";

export default class HeaderItem extends React.Component {
  render() {
    const { text } = this.props;
    return <div className="item">{text}</div>;
  }
}
