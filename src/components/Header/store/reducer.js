import { USER_LOGIN, SUCESS_LOGIN } from './actionTypes';

const defaultState = {
  login: false,
}

export default (state = defaultState, action) => {
  console.log(action, '--action--')

  switch(action.type) {
    case USER_LOGIN: 
      return {
        ...state,
        login: action.value
      }
    // case SUCESS_LOGIN:
    //   return  {
    //     ...state,
    //     login: action.value
    //   }
    default:
      return state;
  }
}