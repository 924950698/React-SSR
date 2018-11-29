import express from 'express';
import { render } from './utils.js';
import { getStore } from '../store';
import { matchRoutes  } from 'react-router-config';
import routes from '../Routes';

const app = express();
app.use(express.static('public')); //服务器发现请求静态文件，就到根目录下的public文件夹去找( express.static是中间件 )

app.get('*', function (req, res) {

 const store = getStore()
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
    res.send(render(req, routes, store))
 })
	
})
app.listen(3001)