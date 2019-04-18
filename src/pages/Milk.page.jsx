import React from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import MilkChart from "../Components/MilkChart";

class Milk extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row>
               <h1>Milk Chart</h1>
               <MilkChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Milk;
