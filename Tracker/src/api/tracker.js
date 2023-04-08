import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
 baseURL: "http://ba711d9d.ngrok.io",
});

instance.interceptors.request.use(
  async config =>
  {
    const token = await AsyncStorage.getItem('token');
    if (token) { config.headers = `Bearer ${token}` }
    return config;
  },
  err => { return Promise.reject(err) }
  );
  
  export default instance;