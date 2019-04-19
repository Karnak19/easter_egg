import React, { Component } from "react";
import { Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import BackCard from "../wild.jpg";
import styles from "./CardGame.module.css";

const CardGame = React.memo(
   ({ egg, onClick }) => {
      return (
         <Col lg={2} xs={3} style={{ marginBottom: 20 }}>
            <Card onClick={onClick} style={{ opacity: !egg.isFlipped ? "1" : "0" }} className={styles.flipcardinner}>
               <CardImg src={BackCard} alt="Card image cap" />
               <CardImgOverlay />
            </Card>

            <Card style={{ opacity: !egg.isFlipped ? "0" : "1" }} className={styles.isFlipped}>
               <CardImg src={egg.raw.image} alt="Card image cap" />
               <CardImgOverlay />
            </Card>
         </Col>
      );
   },
   (prevProps, nextProps) => prevProps.egg.id !== nextProps.egg.id
);

export default CardGame;
