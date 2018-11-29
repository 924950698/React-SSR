import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

// matchPath只能匹配单级路由，matchRoutes可以匹配多级路由 
// console.log(matchedRoutes, '---当前路由项---')    //第二个空数组是在请求小图标

export const render =(req, routes, store) => {
    const content = renderToString((
      //每次用户访问页面，都会执行getStore()方法，都会创建一个store（即独立store）
      <Provider store={store}>    
        <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
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
          <script>
            window.context = { state: ${JSON.stringify(store.getState())} }
          </script>
          <script src='/index.js'></script>
        </body>
      </html>`)
}