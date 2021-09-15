import React from "react";

import { connect } from "react-redux";
import {increment,decrement, addUser, incrementAsync} from './store/actions/rootAction';

class App extends React.Component{
    render() {
        const {store, increment, incrementAsync, decrement, addUser} = this.props;
        return (
            <div>
                <div className="" style={{height: '100px', background: 'pink'}}>
                    <div>{store.count}</div>
                    <ul>
                        {store.user.map((user) => <li key={user.id}>{user.name}</li>)}
                    </ul>
                    <button onClick={() => increment(1)}>添加</button>
                    <button onClick={() => incrementAsync(1)}>异步添加</button>
                    <button onClick={() => decrement(1)}>删除</button>
                    <button onClick={() => addUser({id: '1', name: '1234'})}>增加用户</button>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        store: {...state}
    }
}

const mapAction = (dispatch) => {
    return {
        increment: (value) => {dispatch(increment(value))},
        incrementAsync: (value) => {dispatch(incrementAsync(value))},
        decrement: (value) => {dispatch(decrement(value))},
        addUser: (user) => {dispatch(addUser(user))},
    }
}

export default connect(mapState,mapAction)(App)