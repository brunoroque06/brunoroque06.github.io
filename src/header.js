import React from "react";
import Logos from "./logos";

import "./header.css";
import HeaderItem from "./header-item";

export default class Header extends React.Component {
  render() {
    return (
      <div className="row margin">
        <div className="column">
          <div className="title">Bruno Roque</div>
          <div className="subtitle">Software Engineer</div>
        </div>
        <div className="row items">
          <HeaderItem text="About" />
          <HeaderItem text="Code Mastery" />
          <HeaderItem text="Software Architecture" />
          <Logos />
        </div>
      </div>
    );
  }
}
