import React from "react";

import { connect } from "react-redux";
import { login } from './store/actions/rootAction';

import Menus from './componets/menus/Menus';
import Home from './views/home/Home';
import Shop from './views/Shop';
import Mine from './views/Mine';

import { Route, Switch, Redirect } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }
  test = () => {
    console.log('test')
  }
  componentDidMount() {
    this.test()
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menus></Menus>
          </Sider>
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/mine" component={Mine} />
              <Redirect to="/home"></Redirect>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapState = (state) => {
  return {
    store: { ...state }
  }
}

// const mapAction = (dispatch) => {
//     return {
//         login: (value) => {dispatch(login(value))},
//     }
// }

export default connect(mapState, { login })(App)