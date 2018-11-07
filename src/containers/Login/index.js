import React from 'react';
import Header from '../../components/header.js';


//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

const Login = () => {
	return (
		<div><Header/>Login</div>
	)
}

export default Login;
