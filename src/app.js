import React from "react";
import Main from "./main";
import Header from "./header";

import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}
