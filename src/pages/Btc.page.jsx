import React from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import BitcoinChart from "../Components/BtcChart";
import Axios from "axios";

class Chocolate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <ResponsiveLayout>
            <Row>
               <h1>Bitcoin Chart</h1>

               <BitcoinChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Chocolate;
