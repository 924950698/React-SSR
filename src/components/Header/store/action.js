import { USER_LOGIN } from './actionTypes';

const changeLogin = (value) => ({
  type: USER_LOGIN,
  value
})

export const getUserLogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE')//存在跨域
      .then( res => {
        console.log(res.data.data.login, 'getList is  sucess!')
        const headerLogin = res.data.data.login;
        dispatch(changeLogin(headerLogin));
      })
  }
}

