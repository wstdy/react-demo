import React from "react";

import Header from './componets/header/header';

import { connect } from "react-redux";
import {login} from './store/actions/rootAction';

class App extends React.Component{
    render() {
        return (
            <div>
                <Header></Header>
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