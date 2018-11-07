import React from 'react';
import Header from '../../components/header.js';
import { connect } from 'react-redux';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

const Home = (props) => {
	return (
		<div>
      <Header />
			{props.name},Welcome to home
			<button onClick={() =>{alert('click')} }>click</button>	
		</div>
	)
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home);
