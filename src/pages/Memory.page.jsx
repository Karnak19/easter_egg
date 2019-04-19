import React, { Component } from "react";
import { Row } from "reactstrap";
import ResponsiveLayout from "../Responsive.layout";
import MemoryGame from "../Components/MemoryGame";
import Memo from "../memo/Memo";

class Memory extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <Row style={{ justifyContent: "center" }}>
               <h1>Memory game here</h1>
               <Memo />
            </Row>
         </ResponsiveLayout>
      );
   }
}

export default Memory;
