/*  
  无状态组件
*/
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getHomeList } from './store/actions';
import styles from './style.css';
import withStyle from '../../withStyle';

//同构：一套服务器代码，在服务器端和客户端各执行一次
//服务端渲染，客户端绑定

class Home extends React.Component {

  getListItem(list) {
    return list.map((item) => <div key={item.id} className={styles.item}>{item.title}</div>)
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>这是柳向东的攒机网站 -- 丰富多彩的攒机资讯</title>
          <meta name="description" content="这是柳向东的攒机网站 -- 丰富多彩的攒机资讯"/>
        </Helmet>
        <div className={styles.container}>
          {
            this.getListItem(this.props.list)
          }
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    if(!this.props.list.length) {
       this.props.getHomeList()
    }
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newList
})

const mapDispatcherToProps = dispatcher => ({
  getHomeList() {
    dispatcher(getHomeList())
  }
})

const exportHome = connect(mapStateToProps, mapDispatcherToProps)(withStyle(Home, styles))

//因为componentWillDidMount在Serve端是不执行的，所以需要把获取到的异步数据传送给服务器端
exportHome.loadData = (store) => {
  //这函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}

export default exportHome;