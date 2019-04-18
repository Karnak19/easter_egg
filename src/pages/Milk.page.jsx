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
               <MilkChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Milk;
