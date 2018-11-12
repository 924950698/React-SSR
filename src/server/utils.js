import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../store';

export const render =(req) => {

  const content = renderToString((
    //每次用户访问页面，都会执行getStore()方法，都会创建一个store（即独立store）
    <Provider store={getStore()}>    
      <StaticRouter location={req.path} context={{}}>
			{Routes}
		  </StaticRouter>
    </Provider>
	));

	return (
		`<html>
			<head>
				<title>React_SSR</title>
			</head>
			<body>
				<div id="root">${content}</div>
				<script src='/index.js'></script>
			</body>
		</html>`)
}