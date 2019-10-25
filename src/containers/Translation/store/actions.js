import { RES_DATA_TRANSLATION } from './constants';

const getTranslationAction = (list) => ({
  type: RES_DATA_TRANSLATION,
  list
})


export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE')//存在跨域
      .then( res => {
        console.log(res.data.data, 'getTranslationList is  sucess!')
        return dispatch(getTranslationAction(res.data.data))
      })
  }
}

