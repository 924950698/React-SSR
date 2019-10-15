import axios from 'axios';
import { RES_DATA_LIST } from './actionsType';

const getListAction = (list) => ({
  type: RES_DATA_LIST,
  list
})

export const getLsit = (server) => {
  // http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
  let url= ''
  if (server) {
    url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE'
  }else {
    url = '/api/news.json?secret=M5s2sPneDE'
  }

  return (dispatch) => {
    return axios.get(url)//存在跨域
    .then( res=> {
      // console.log(res, 'getList is  sucess!')
      const dataList = res.data.data;
      dispatch(getListAction(dataList));
    })
  }
}

