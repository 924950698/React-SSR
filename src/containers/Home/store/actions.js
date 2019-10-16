import { RES_DATA_LIST } from './actionsType';

const getListAction = (list) => ({
  type: RES_DATA_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE')//存在跨域
      .then( res => {
        // console.log(res, 'getList is  sucess!')
        const dataList = res.data.data;
        dispatch(getListAction(dataList));
      })
  }
}

