import React, { Component } from "react";
import ResponsiveLayout from "./Components/Responsive.layout";
import Particle from './Components/Particle'


class App extends Component {
   render() {
      return (
         <div className="App">
            {/* TODO: Add the router, then move the Layout */}
            <ResponsiveLayout />
            <Particle />
         </div>
      );
   }
}
 
export default App;