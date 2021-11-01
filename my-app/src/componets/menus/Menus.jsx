import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { addList } from '../../store/actions/rootAction';


class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {
    console.log('this.state', this.props)
    this.props.history.replace('/home')
  }
  selectMenu = (data) => {
    this.props.history.replace(data.key)
    console.log('this.props', this.props.addList({key: '/info', title: '个人信息'}))
    // let list = [...this.state.list, {key: '/info', title: '个人信息'}]
    // this.setState({list})
  }
  render() {
    const {menu} = this.props.store
    return (
      <div>
        <Menu mode="inline" theme="dark" onClick={(data) => this.selectMenu(data)}>
          {
            menu.map((v) => <Menu.Item key={v.key}>{v.title}</Menu.Item>)
          }
        </Menu>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    store: { ...state }
  }
}

const mapAction = (dispatch) => {
  return {
    addList: (value) => {dispatch(addList(value))},
  }
}

export default connect(mapState, mapAction)(withRouter(Menus));