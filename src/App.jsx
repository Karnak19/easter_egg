import React, { Component } from "react";
import ResponsiveLayout from "./Components/Responsive.layout";
import Particle from "./Components/Particle";
import "./App.css";
import ChocolatePage from "./Chocolate.page";

class App extends Component {
   render() {
      return (
         <div className="App">
            {/* TODO: Add the router, then move the Layout */}
            <ResponsiveLayout>
               <Particle />
               <ChocolatePage />
               ind
            </ResponsiveLayout>
         </div>
      );
   }
}

export default App;
