import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'; 
import { Helmet } from 'react-helmet';

// matchPath只能匹配单级路由，matchRoutes可以匹配多级路由 
// console.log(matchedRoutes, '---当前路由项---')    //第二个空数组是在请求小图标

export const render =(req, routes, store, context) => {
  const content = renderToString((
    //每次用户访问页面，都会执行getStore()方法，都会创建一个store（即独立store）
    <Provider store={store}>    
      <StaticRouter location={req.path} context={context}>
      <div>
        {renderRoutes(routes)}
      </div>
      </StaticRouter>
    </Provider>
  ));

  const helmet = Helmet.renderStatic();
   
  const cssSsr = context.css.length ? context.css.join('\n') : ''

  return (
    `<html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${cssSsr}</style>
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