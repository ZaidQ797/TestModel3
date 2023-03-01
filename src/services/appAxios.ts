import axios from 'axios';
import Config from 'react-native-config';

const appAxios = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

export default appAxios;
