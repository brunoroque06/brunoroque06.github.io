import React from "react";
import Logos from "./logos";

import "./header.css";
import HeaderItem from "./header-item";

export default class Header extends React.Component {
  render() {
    return (
      <div class="row margin">
        <div class="column">
          <div class="title">
            Bruno Roque
          </div>
          <div class="subtitle">
            Software Engineer
          </div>
        </div>
        <div class="row items">
          <HeaderItem text="About" />
          <HeaderItem text="Code Mastery" />
          <HeaderItem text="Software Architecture" />
          <Logos />
        </div>
      </div>
    );
  }
}
