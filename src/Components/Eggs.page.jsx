import React from "react";
import ResponsiveLayout from "../Responsive.layout";

class Eggs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <div>Hello eggs</div>;
         </ResponsiveLayout>
      );
   }
}

export default Eggs;
