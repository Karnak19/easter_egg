import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chocolate from "./pages/Chocolate.page";
import Eggs from "./pages/Eggs.page";
import Milk from "./pages/Milk.page";
import Home from "./pages/Home.page";
import SecondHome from "./pages/SecondHome";
import Btc from "./pages/Btc.page";
import Eth from "./pages/Eth.page";
import Trx from "./pages/Trx.page";
import Memory from "./pages/Memory.page";

const RouterEaster = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chocolate" component={Chocolate} />
            <Route exact path="/eggs" component={Eggs} />
            <Route exact path="/milk" component={Milk} />
            <Route exact path="/secondHome" component={SecondHome} />
            <Route exact path="/btc" component={Btc} />
            <Route exact path="/eth" component={Eth} />
            <Route exact path="/trx" component={Trx} />
            <Route exact path="/memory" component={Memory} />
         </Switch>
      </Router>
   );
};

export default RouterEaster;
