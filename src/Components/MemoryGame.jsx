import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardGame from "./CardGame";

class Game extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <Col lg={{ offset: 2, size: 8 }} xs={{ offset: 0, size: 12 }}>
            <Row>
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
               <CardGame />
            </Row>
         </Col>
      );
   }
}

export default Game;
