/*
  1.把client端和server端可以复用的 -- 创建store的部分，拿出来封装成一个组件。
  2.每个用户访问页面的时候，应该导出的每个用户自己的store(即导出一个创建store的方法)，而不应该是单例的store（即不应该是所有用户共用一个store）
  3.combineReducers 把所有的reducer组合到一个大的reducer之中。
  4.脱水和注水：把数据注入到window.context这里，这是注水；在客户端拿出来直接使用，这叫做数据的脱水
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'; 
import { reducer as homeReducer }  from '../containers/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

export const getStore = (req) => {
  // 改变服务器端的store内容，一定要使用serverAxios
  return createStore(
    reducer, 
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
  );
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  // 改变浏览器端的store内容，一定要使用clientAxios
  return createStore(
    reducer, 
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
}
