import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReduces from './reduces/rootReduces';
// 自定义中间件
// const logger = store => next => action => {
//     console.log('dispacth-->', action);
//     let result = next(action);
//     console.log('next state -->', store.getState());
//     return result;
// }
// const error = store => next => action => {
//     try {
//         next(action);
//     } catch(e) {
//         console.log('error', e);
//     }
// }

//applyMiddleware 作用为了引入中间件

const store = createStore(rootReduces,{count: 100},applyMiddleware(logger, thunk));

export default store;
