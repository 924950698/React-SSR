import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

const Header = (props) => {
	console.log(props, '--props--')
	return (
		<div>
			<Link to='/'>首页</Link><br /> 
			{
				props.login ? <div> 
					<Link to='/'>翻译列表</Link><br />
      				<Link to='/login'>退出</Link>
				</div> : <Link to='/login'>登陆</Link>
			}
		</div>
	)
}

const mapState = (state) => ({
	login: state.header.login
})

export default connect(mapState, null)(Header);
// export default Header;
