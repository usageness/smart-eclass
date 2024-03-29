import { axios, axiosWithAccessToken } from '../axios';

const requestLogin = (userData: UserLogin) => {
  return axios.post('/login', userData).then(res => res.data);
};

const requestSignup = (userData: User) => {
  return axios.post('/signup', userData).then(res => res.data);
};

const requestValidateToken = () => {
  return axiosWithAccessToken.get('/me').then(res => res.data);
};

export { requestLogin, requestSignup, requestValidateToken };
