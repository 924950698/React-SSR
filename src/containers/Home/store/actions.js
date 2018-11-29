import axios from 'axios';
import { RES_DATA_LIST } from './actionsType';

const getListAction = (list) => ({
  type: RES_DATA_LIST,
  list
})

export const getLsit = () => {
  return (dispatch) => {
    return axios.get('http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE')//存在跨域
    .then( res=> {
      // console.log(res, 'getList is  sucess!')
      const dataList = res.data.data;
      dispatch(getListAction(dataList));
    })
  }
}

