/*  
  404组件
*/
import React, { Component } from 'react';

class NotFound extends React.Component {

  componentWillMount() {
    const  { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUNT = true)
  }

  render() {
    return <div>404, sorry,  page not found!</div>
  }
}

export default NotFound;
