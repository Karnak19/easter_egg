import React, { Component } from "react";
import { Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import BackCard from "../wild.jpg";


const CardGame = React.memo(({ egg, onClick }) => {

      return (
         <Col lg={2} xs={3} style={{ marginBottom: 20 }}>
            <Card onClick={onClick}>
               <CardImg style={{ opacity: !egg.isFlipped ? '0' : '1', height:!egg.isFlipped ? '0px' : '120px'}}  src={egg.raw.image} alt="Card image cap"  />
               <CardImg style={{ opacity: !egg.isFlipped ? '1' : '0', height:!egg.isFlipped ? '120px' : '0px'}}  src={BackCard} alt="Card image cap"  />
               <CardImgOverlay />
            </Card>
         </Col>
      );

}, (prevProps, nextProps) => prevProps.egg.id !== nextProps.egg.id);

export default CardGame;
