import React from "react";

export default class Home extends React.Component {
  constructor(props) {
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
    this.setState({ [e.target.name]: e.target.value })
  }
  login = (e) => {
    console.log(this);
  }
  render() {
    return (
      <div>
        我是首页
      </div>
    )
  }
}