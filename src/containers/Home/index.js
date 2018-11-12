/*  
  无状态组件
*/
import React, { Component } from 'react';
import Header from '../../components/header.js';
import { connect } from 'react-redux';
import { getLsit } from './store/actions';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

class Home extends React.Component {

  getListItem(list) {
    console.log(list, '---list----')
    return list.map((item) => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return <div>
      <Header />
      {
        this.getListItem(this.props.list)
      }
      <button onClick={() =>{alert('click')} }>click</button>	
    </div>
  }

  componentDidMount() {
    this.props.getHomeList()
  }
}

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newList
  })

const mapDispatcherToProps = dispatcher => ({
  getHomeList() {
    console.log('test')
    dispatcher(getLsit())
  }
})

export default connect(mapStateToProps, mapDispatcherToProps)(Home);
