import Axios from 'axios';

interface User {
  id: string;
  password: string;
}

const requestLogin = (userData: Omit<User, 'name'>) => {
  return Axios.post('http://localhost:5000/login', userData).then(
    res => res.data,
  );
};

export { requestLogin };
