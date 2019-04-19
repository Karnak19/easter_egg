import React, { Component } from "react";
import { Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import BackCard from "../wild.jpg";

class CardGame extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <Col lg={2} xs={3} style={{ marginBottom: 20 }}>
            <Card>
               <CardImg width="100%" src={BackCard} alt="Card image cap" />
               <CardImgOverlay />
            </Card>
         </Col>
      );
   }
}

export default CardGame;
