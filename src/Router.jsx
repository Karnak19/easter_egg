import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chocolate from "./pages/Chocolate.page";
import Eggs from "./pages/Eggs.page";
import Milk from "./pages/Milk.page";
import Home from "./pages/Home.page";

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
