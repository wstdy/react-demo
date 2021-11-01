import {combineReducers} from 'redux'
import count from './count'
import user from './user'
import menu from './menu'

//1.不能直接改变state只能返回一个新的state

export default combineReducers({
    count,
    user,
    menu
})