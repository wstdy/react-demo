import React from "react";
import { Layout } from 'antd';

import Bread from '../bread/Bread'



export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Layout.Header>
        <div>
          <Bread></Bread>
        </div>
      </Layout.Header>
    )
  }
}