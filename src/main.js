import React from "react";
import ReactMarkdown from "react-markdown";
import markDown from "./data/quotes.md";

import "./main.css";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { text: null };
  }

  componentDidMount() {
    fetch(markDown)
      .then(r => r.text())
      .then(text => {
        this.setState({ text });
      })
      .catch(() => this.setState({ text: "Data could not be loaded." }));
  }

  render() {
    return (
      <div className="main">
        <ReactMarkdown source={this.state.text} />
      </div>
    );
  }
}
