import axios from 'axios';

const instance = axios.create({
    baseURL: '/', //客户端默认前缀反斜杠
});

export default instance;
