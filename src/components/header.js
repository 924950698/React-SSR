import React from 'react';
import { Link } from 'react-router-dom';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

const Header = () => {
	return (
		<div>
			<Link to='/'>Home</Link><br />
      <Link to='/login'>Login</Link>
		</div>
	)
}

export default Header;
