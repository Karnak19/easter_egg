import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chocolate from "./Chocolate.page";
import Eggs from "./Eggs.page";
import Milk from "./Milk.page";
import Home from "./Home.page";

const RouterEaster = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chocolate" component={Chocolate} />
            <Route exact path="/eggs" component={Eggs} />
            <Route exact path="/milk" component={Milk} />
         </Switch>
      </Router>
   );
};

export default RouterEaster;
