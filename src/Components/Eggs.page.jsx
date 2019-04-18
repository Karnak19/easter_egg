import React from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import EggsChart from "./EggsChart";

class Eggs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row>
               <EggsChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Eggs;
