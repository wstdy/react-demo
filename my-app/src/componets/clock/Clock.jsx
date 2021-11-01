import React from "react";
import { Button, message, Progress } from 'antd';

class Clock extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      timer: null,
      date: new Date().toString(),
      percent: 10,
      flag: true
    }
  }
  setDate() {
    this.setState({
      date: new Date().toString()
    })
  }
  test() {
    message.info('this is message')
  }
  changePercent() {
    let {percent, flag} = this.state
    if (flag) {
      percent = percent + 10
    } else {
      percent = percent - 10
    }
    if (percent === 100) {
      this.setState({flag: !flag, percent})
    } else if(percent === 0) {
      this.setState({flag: !flag, percent})
    } else {
      this.setState({percent})
    }
  }
  componentDidCatch() {
    console.log('didCacth')
  }
  componentDidMount() {
    console.log('componentDidMount')
    // this.timer = setInterval(() => this.setDate(), 1000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }
  render() {
    const {percent} = this.state
    return (
      <>
        <div>{this.state.date}</div>
        <Button onClick={() => this.test()}>消息提示</Button>
        <br />
        <Progress type="circle" percent={percent}></Progress>
        <br />
        <Button onClick={() => this.changePercent()}>进度条</Button>
      </>
    )
  }
}

export default Clock;