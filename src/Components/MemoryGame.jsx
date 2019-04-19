import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardGame from "./CardGame";
import Reward from '../Treasure.png'



const GameMemo = ({ eggs, toggle, isLoading }) => {
   const isSomeEggNotFlipped = eggs.some((egg) => !egg.isFlipped)
   if (!isSomeEggNotFlipped) {
      return (
         <div>
            <h1>Congrats you resolved the first part of the test : Download here the application, if you solve the next enigma you'll get the private key to open the treasure</h1>>
            <img src={Reward} width='500px' />
         </div>
      )
   }
   return (
      <Col lg={{ offset: 2, size: 8 }} xs={{ offset: 0, size: 12 }}>
         <Row>
            {eggs.map((egg, i) => <CardGame egg={egg} key={egg.id + '-' + i} onClick={() => !isLoading && toggle(egg.id)} />)}
         </Row>
      </Col>
   );

}

export default GameMemo