import React from "react";
import ResponsiveLayout from "../Responsive.layout";
import MilkChart from './MilkChart'


class Milk extends React.Component {
   constructor(props) {
      super(props)
      this.state = {}
   }
   render() {
      return (
         <ResponsiveLayout>
            <MilkChart />
         </ResponsiveLayout>
      );
   }
}

export default Milk;
