import React, { Component } from "react";
import ResponsiveLayout from "./Responsive.layout";
import Particle from "./Components/Particle";

class App extends Component {
   render() {
      return (
         <div className="App">
            {/* TODO: Add the router, then move the Layout */}
            <ResponsiveLayout>
               ind
               <Particle />
            </ResponsiveLayout>
         </div>
      );
   }
}

export default App;
