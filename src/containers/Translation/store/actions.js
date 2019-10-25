export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE')//存在跨域
      .then( res => {
        console.log(res, 'getList is  sucess!')
      })
  }
}

