import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

//exact： 当用户访问根路径，呈现那个组件
//定义一个路由条目
export default (
	<div>
		<Route path='/' exact component={Home}></Route>
		<Route path='/login' exact component={Login}></Route>
	</div>
)