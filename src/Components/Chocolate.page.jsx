import React from "react";
import { Row } from "reactstrap";

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
            <Row>
               <ChocolateChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Chocolate;
