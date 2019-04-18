import React from "react";
import ResponsiveLayout from "../Responsive.layout";
import ChocolateChart from "./ChocolateChart";

class Chocolate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <div>Hello chocolate</div>
            <ChocolateChart />
         </ResponsiveLayout>
      );
   }
}

export default Chocolate;
