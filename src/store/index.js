/*
  1.把client端和server端可以复用的 -- 创建store的部分，拿出来封装成一个组件。
  2.每个用户访问页面的时候，应该导出的每个用户自己的store(即导出一个创建store的方法)，而不应该是单例的store（即不应该是所有用户共用一个store）
  3.combineReducers 把所有的reducer组合到一个大的reducer之中。
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'; 
import { reducer as reducerHome }  from '../containers/Home/store';

const reducer = combineReducers({     
  home: reducerHome,
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export default getStore;