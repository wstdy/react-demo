import React from "react";

import Header from './componets/header/header';

import { connect } from "react-redux";
import {login} from './store/actions/rootAction';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: '北京'
        }
    }
    render() {
        return (
            <div>
                <Header data={this.state.data}></Header>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        store: {...state}
    }
}

// const mapAction = (dispatch) => {
//     return {
//         login: (value) => {dispatch(login(value))},
//     }
// }

export default connect(mapState,{login})(App)