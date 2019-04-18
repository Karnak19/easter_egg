import React from "react";
import { Row } from "reactstrap";
import ResponsiveLayout from "../Responsive.layout";
import EthChart from "../Components/EthChart";
import EthereumChart from "../Components/EthChart";

class Btc extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <ResponsiveLayout>
            <Row>
               <h1>Ethereum Chart</h1>

               <EthereumChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Btc;
