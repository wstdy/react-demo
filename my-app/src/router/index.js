import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Home from '../views/Home'
// import Life from '../views/Life'
// import Mine from '../views/Mine'
// import Shop from '../views/Shop'
// import NotFound from '../views/NotFound'

import { connect } from "react-redux";
import {decrement} from '../store/actions/count';

class App extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="" style={{height: '100px', background: 'pink'}}>
                    {/* <div>{this.props.counter}</div> */}
                    <button onClick={() => this.props.increment(1)}>添加</button>
                    <button onClick={() => this.props.decrement(1)}>删除</button>
                </div>
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} ></Route>
                        <Route path="/life" component={Life} ></Route>
                        <Route path="/mine" component={Mine} ></Route>
                        <Route path="/shop" component={Shop} ></Route>
                        <Route component={NotFound} ></Route>
                    </Switch>
                </BrowserRouter> */}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            counter: state
        }
    },
    (dispatch) => {
        return {
            increment: () => {dispatch((function() {
                return {type: 'ADD_TODO', value: 20000}
            })())},
            decrement: () => {dispatch(decrement())}
        }
    }
)(App)