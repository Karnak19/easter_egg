import React, { Component } from "react";
import { Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import BackCard from "../wild.jpg";


const CardGame = ({ egg, onClick }) => {
   if (egg.isFlipped) {
      return (
         <Col lg={2} xs={3} style={{ marginBottom: 20 }}>
            <Card onClick={onClick}>
               <CardImg width="100%" src={egg.raw.image} alt="Card image cap"  />
            </Card>
         </Col>
      )
   }
   return (
      <Col lg={2} xs={3} style={{ marginBottom: 20 }}>
         <Card onClick={onClick}>
            <CardImg width="100%" src={BackCard} alt="Card image cap" />
            <CardImgOverlay />
         </Card>
      </Col>

   );

}

export default CardGame;
