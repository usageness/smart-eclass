import Axios from 'axios';

const baseURL = 'http://localhost:5000';

const axios = Axios.create({
  baseURL,
});

const axiosWithAccessToken = Axios.create({
  baseURL,
});

axiosWithAccessToken.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');

    if (config.headers && accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export { axios, axiosWithAccessToken };
