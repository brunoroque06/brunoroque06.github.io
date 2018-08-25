import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div class="row">
        <div class='col-2'>
          <NavigationBar />
        </div>
        <div class='col-10'>
          <Body />
        </div>
      </div>
    );
  }
}

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        Hello Navigation Bar!
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>
        Hello Body!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

