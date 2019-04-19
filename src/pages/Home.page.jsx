import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import ResponsiveLayout from "../Responsive.layout";

const Home = () => {
   return (
      <ResponsiveLayout>
         <Row style={{ marginTop: 250 }}>
            <Col lg={{ size: 6, offset: 3 }}>
               <Button tag={Link} to="/chocolate" color="warning" size="lg" block>
                  Cours du chocolat
               </Button>
               <Button tag={Link} to="/milk" color="warning" size="lg" block>
                  Cours du lait
               </Button>
               <Button tag={Link} to="/eggs" color="warning" size="lg" block>
                  Cours des oeufs
               </Button>
               <Button tag={Link} to="/btc" color="warning" size="lg" block>
                  Cours du Bitcoin
               </Button>
            </Col>
         </Row>
      </ResponsiveLayout>
   );
};

export default Home;
