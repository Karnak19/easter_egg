import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardGame from "./CardGame";
import Reward from "../Treasure.png";

const GameMemo = ({ eggs, toggle, isLoading }) => {
   const isSomeEggNotFlipped = eggs.some(egg => !egg.isFlipped);
   if (!isSomeEggNotFlipped) {
      return (
         <div>
            <h1>
               Congrats
            </h1>
         </div>
      );
   }
   return (
      <Col lg={{ offset: 2, size: 8 }} xs={{ offset: 0, size: 12 }}>
         <Row style={{ justifyContent: "center" }}>
            {eggs.map((egg, i) => (
               <CardGame egg={egg} key={egg.id + "-" + i} onClick={() => !isLoading && toggle(egg.id)} />
            ))}
         </Row>
      </Col>
   );
};

export default GameMemo;
