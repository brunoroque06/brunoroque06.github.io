import React from "react";
import ReactMarkdown from "react-markdown";
import markDown from "./data/quotes.md";

import "./article.css";

export default class Article extends React.Component {
  constructor() {
    super();
    this.state = { text: null };
  }

  componentDidMount() {
    window
      .fetch(markDown)
      .then(r => r.text())
      .then(text => {
        this.setState({ text });
      })
      .catch(() => this.setState({ text: "Data could not be loaded." }));
  }

  render() {
    const { text } = this.state;
    return (
      <div className="article">
        <ReactMarkdown source={text} />
      </div>
    );
  }
}
