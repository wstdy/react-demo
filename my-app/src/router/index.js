import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../views/Home'
import Life from '../views/Life'
import Mine from '../views/Mine'
import Shop from '../views/Shop'
import NotFound from '../views/NotFound'

export default class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/life" component={Life} ></Route>
                    <Route path="/mine" component={Mine} ></Route>
                    <Route path="/shop" component={Shop} ></Route>
                    <Route component={NotFound} ></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}