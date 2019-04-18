import React, { Component } from "react";
import { Row } from "reactstrap";

import ResponsiveLayout from "../Responsive.layout";
import MemoryGame from "../Components/MemoryGame";

class Memory extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row>
               <h1>Memory game here</h1>
               <MemoryGame />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Memory;
