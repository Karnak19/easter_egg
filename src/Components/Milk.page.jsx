import React from "react";
import ResponsiveLayout from "../Responsive.layout";

class Milk extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <div>Hello milk</div>;
         </ResponsiveLayout>
      );
   }
}

export default Milk;
