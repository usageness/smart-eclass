import Axios from 'axios';

const requestLogin = (userData: UserLogin) => {
  return Axios.post('http://localhost:5000/login', userData).then(
    res => res.data,
  );
};

export { requestLogin };
