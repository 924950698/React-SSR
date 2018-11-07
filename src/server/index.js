import express from 'express';
import React from 'react';
import { render } from './utils.js';

const app = express();
app.use(express.static('public')); //服务器发现请求静态文件，就到根目录下的public文件夹去找( express.static是中间件 )

app.get('*', (req, res) => {

	res.send(
		render(req)
	)
})

app.listen(3001)