import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from './store/actions';
import { Redirect } from 'react-router';
import styles from './styles.css';
import withStyle  from '../../withStyle';

class Translation extends React.Component {
 
  getListItem(list) {
    return list.map((item) => <div key={item.id} className={styles.item}>{item.title}</div>)
  }

  render() {
    const { list, login } = this.props;
    return login ? <div className={styles.container}>
      {this.getListItem(list)}
    </div> : <Redirect to='/' />
  }

  componentDidMount() {
		if (!this.props.list.length) {
			this.props.getTranslationList();
		}
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

const exportTranslation = connect(mapStateToProps, mapDispatcherToProps)(withStyle(Translation, styles))

exportTranslation.loadData = (store) => {
  console.log('exportTranslation')
  return store.dispatch(getTranslationList())
}

export default exportTranslation;