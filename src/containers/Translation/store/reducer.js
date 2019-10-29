import { RES_DATA_TRANSLATION } from './constants';

const translationState = {
  translationList: [],
}

export default (state = translationState, action) => {
  switch( action.type) {
    case RES_DATA_TRANSLATION:
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}