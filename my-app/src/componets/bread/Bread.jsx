import React from "react";
import { Breadcrumb } from 'antd';

class Bread extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: ['Home', 'List', 'App1']
    }
  }
  render() {
    const {list} = this.state
    return (
      <Breadcrumb>
        {list.map((v) => <Breadcrumb.Item key={v} onClick={() => console.log(v)}>{v}</Breadcrumb.Item>)}
      </Breadcrumb>
    )
  }
}

export default Bread;