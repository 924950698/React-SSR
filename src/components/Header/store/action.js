import { USER_LOGIN, SUCESS_LOGIN } from './actionTypes';

const changeLogin = (value) => ({
  type: USER_LOGIN,
  value
})

export const getUserLogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?')//存在跨域
      .then( res => {
        dispatch(changeLogin(res.data.data.login));
      })
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?')//存在跨域
      .then( res => {
        // console.log(res, 'getList is  sucess!')
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json?')//存在跨域
      .then( res => {
        console.log(res, 'getList is  sucess!')
        dispatch(changeLogin(false))
      })
  }
}

