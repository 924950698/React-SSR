import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from './store/actions';

class Translation extends React.Component {

  render() {
    return <div>
123
    </div>
  }

  // componentDidMount() {
  //   if(!this.props.list.length) {
  //      this.props.getTranslationList()
  //   }
  // }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

// const mapStateToProps = state => ({
//   name: state.home.name,
//   list: state.home.newList
// })

const mapDispatcherToProps = dispatcher => ({
  getTranslationList() {
    dispatcher(getTranslationList())
  }
})

export default connect(null, mapDispatcherToProps)(Translation);