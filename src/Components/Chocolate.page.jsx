import React from "react";
import ResponsiveLayout from "../Responsive.layout";

class Chocolate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <div>Hello chocolate</div>
         </ResponsiveLayout>
      );
   }
}

export default Chocolate;
