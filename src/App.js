import React from 'react';
import Header from './components/Header/';
import { renderRoutes } from 'react-router-config';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

const App = (props) => {
	return (
		<div>
      <Header/>
      {renderRoutes(props.route.routes)}
    </div>
	)
}

export default App;
