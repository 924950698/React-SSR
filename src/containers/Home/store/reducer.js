import { RES_DATA_LIST } from './actionsType';

const defaultState = {
  newList: [],
}

export default (state = defaultState, action) => {
  switch( action.type) {
    case RES_DATA_LIST:
      console.log(action.list, '--action--')
      return {
        ...state,
        newList: action.list
      }
    default:
      return state
  }
}