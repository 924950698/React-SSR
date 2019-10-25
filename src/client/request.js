import axios from 'axios';
import config from '../config.js';

const instance = axios.create({
    baseURL: '/', //客户端默认前缀反斜杠
    params: { secret: config.secret }
});

export default instance;
