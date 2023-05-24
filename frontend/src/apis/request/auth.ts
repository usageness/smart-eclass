import { axios } from '../axios';

const requestLogin = (userData: UserLogin) => {
  return axios.post('/login', userData).then(res => res.data);
};

export { requestLogin };
