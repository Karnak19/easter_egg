import React, { Component } from "react";
import "./App.css";
import RouterEaster from "./Router";
import Memo from "./memo/Memo";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: Add the router, then move the Layout */}
        <RouterEaster />
        <Memo />
      </div>
    );
  }
}

export default App;
