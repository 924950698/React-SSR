import express from 'express';
import { render } from './utils.js';
import { getStore } from '../store';
import proxy  from 'express-http-proxy';
import { matchRoutes  } from 'react-router-config';
import routes from '../Routes';

const app = express();
app.use(express.static('public')); //服务器发现请求静态文件，就到根目录下的public文件夹去找( express.static是中间件 )

app.use('/api', proxy('http://47.95.113.63', { //发现请求api路径，就代理到http://47.95.113.63路径
  proxyReqPathResolver: function (req) { 
    console.log(req.url)                        //req.url是api后面的接口路径
    return '/ssr/api' + req.url;
  }
}));

app.get('*', function (req, res) {

 const store = getStore(req)	//此处store为空


 //根据路由路径，给store添加数据
 const matchedRoutes = matchRoutes(routes, req.path);
 
 // 让matchRoutes里面所有的组件，对应的loadData方法执行一次 
 const promises = []
 matchedRoutes.forEach(item =>{
   if (item.route.loadData) {
    promises.push(item.route.loadData(store))
   }
 })

 Promise.all(promises).then(()=> {
    const context = {};
    const html = render(req, routes, store, context) //此处store已获取到数据
    if(context.action ==='REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUNT) {
      res.status(404)  //express提供的可以改变状态码的方法
      res.send(html)
    } else{
      res.send(html)
    }
    
 })
	
})
app.listen(3001)