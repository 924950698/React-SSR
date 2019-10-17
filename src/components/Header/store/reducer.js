import { USER_LOGIN } from './actionTypes';

const defaultState = {
  login: true,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case USER_LOGIN: 
      return {
        ...state,
        login: action.login
      }
    default:
      return state;
  }
}