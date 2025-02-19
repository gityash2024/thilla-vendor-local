import axios from 'axios';

const instance = axios.create({
  baseURL:'https://thilaa.jethitech.com/api/', // Replace with your API base URL
});

instance.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.token) {
      config.headers['authorization'] = `Bearer ${userData.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
 
    return Promise.reject(error);
  }
);

export default instance;
