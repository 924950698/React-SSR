import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from './store/actions';
import { Redirect } from 'react-router';

class Translation extends React.Component {
 
  getListItem(list) {
    return list.map((item) => <div key={item.id}>{item.title}</div>)
  }

  render() {
    const { list, login } = this.props;
    return login ? <div>
      {this.getListItem(list)}
    </div> : <Redirect to='/' />
  }
}

const mapStateToProps = state => ({
  list: state.translation.translationList, //translation:全局store中； translationList：当前store中reducer中的
  login: state.header.login,
})

const mapDispatcherToProps = dispatcher => ({
  getTranslationList() {
    dispatcher(getTranslationList())
  }
})

const exportTranslation = connect(mapStateToProps, mapDispatcherToProps)(Translation)

exportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

export default exportTranslation;