import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chocolate from './Chocolate'
import Eggs from './Eggs'
import Milk from './Milk'
import Home from './Home'

const RouterEaster = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chocolate' component={Chocolate} />
                <Route exact path='/eggs' component={Eggs}/>
                <Route exact path='/milk' component={Milk}/>
            </Switch>
        </Router>
    )
}

export default RouterEaster