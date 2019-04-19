import React from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import ChocolateChart from "../Components/ChocolateChart";

class Chocolate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row style={{ justifyContent: "center" }}>
               <h1>Chocolate Chart</h1>

               <ChocolateChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Chocolate;
