import React from "react";

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
    }
    onChange = (e) => {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }
    login = (e) => {
        console.log(this);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="userName" value={this.userName} onChange={this.onChange} /><br />
                <input type="text" name="password" value={this.password} onChange={this.onChange} /><br />
                <button onClick={this.login}>登录</button>
            </form>
        )
    }
}