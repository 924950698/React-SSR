import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './containers/Home';
import Translation from './containers/Translation';

//exact： 当用户访问根路径，呈现那个组件
//定义一个路由条目
export default [{
  path: '/', 
  component: App,
  loadData: App.loadData,
  routes: [         //二级路由
    {
      path: '/',
      component: Home,
      exact: true,  //精确匹配,访问二级路由，需要关闭
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: '/translation',
      component: Translation,
      exact: true,
      loadData: Translation.loadData,
      key: 'translation'
    }
  ]
}]



