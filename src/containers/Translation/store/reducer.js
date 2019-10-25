import { RES_DATA_TRANSLATION } from './constants';

const translationState = {
  translationList: [{id:1, title: 'reducer没有接收到接口数据'}],
}

export default (state = translationState, action) => {
  switch( action.type) {
    case RES_DATA_TRANSLATION:
      console.log(action, '--action11--')
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}