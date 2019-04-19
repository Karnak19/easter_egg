import React from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import EggsChart from "../Components/EggsChart";

class Eggs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row style={{ justifyContent: "center" }}>
               <div>
                  <h1>Eggs Chart</h1>
               </div>

               <EggsChart />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Eggs;
