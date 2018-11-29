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
    // console.log(list, '---list----')
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
    console.log(123)
    if(!this.props.list.length) {
       this.props.getHomeList()
    }
  }
}

//因为componentWillDidMount在Serve端是不执行的，所以需要把获取到的异步数据传送给服务器端
Home.loadData = (store) => {
  //1.这函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getLsit())
}

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newList
  })

const mapDispatcherToProps = dispatcher => ({
  getHomeList() {
    dispatcher(getLsit())
  }
})

export default connect(mapStateToProps, mapDispatcherToProps)(Home);
