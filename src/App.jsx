import React, { Component } from "react";
<<<<<<< HEAD:src/App.js
import ResponsiveLayout from "./Responsive.layout";
import Particle from "./Components/Particle";
=======
import ResponsiveLayout from "./Components/Responsive.layout";
import Particle from './Components/Particle'

>>>>>>> 195d3b07ea53ba4089e9f182f8d2d9ee8737d9fb:src/App.jsx

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
