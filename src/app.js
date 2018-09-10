import React from "react";
import Main from "./article";
import Header from "./header";

import "./app.css";

const App = () => (
  <div className="container">
    <header>
      <Header />
    </header>
    <main>
      <Main />
    </main>
  </div>
);

export default App;
