import axios from 'axios';
import { RES_DATA_LIST } from './actionsType';
import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';

const getListAction = (list) => ({
  type: RES_DATA_LIST,
  list
})

export const getLsit = (server) => {
  
  const request = server ? serverAxios : clientAxios

  return (dispatch) => {
    return request.get('/api/news.json?secret=PP87ANTIPIRATE')//存在跨域
    .then( res=> {
      // console.log(res, 'getList is  sucess!')
      const dataList = res.data.data;
      dispatch(getListAction(dataList));
    })
  }
}

