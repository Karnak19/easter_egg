import React, { Component } from "react";
import ResponsiveLayout from "./Responsive.layout";

class App extends Component {
   render() {
      return (
         <div className="App">
            {/* TODO: Add the router, then move the Layout */}
            <ResponsiveLayout />
         </div>
      );
   }
}

export default App;
