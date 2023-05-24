import { useResetRecoilState, useRecoilState } from 'recoil';
import { loginState } from 'store/states';

interface Token {
  accessToken: string;
}

const useAuth = () => {
  const [{ isLogin, user }, setLoginInfo] = useRecoilState(loginState);
  const resetLoginInfo = useResetRecoilState(loginState);

  const setAuth = (accessToken: Token) => {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
  };

  const setLogin = (userInfo: UserProfile) => {
    setLoginInfo({
      isLogin: true,
      user: userInfo,
    });
  };

  const resetAuth = () => {
    resetLoginInfo();
    localStorage.removeItem('accessToken');
  };

  return {
    isLogin,
    user,
    setLoginInfo,
    setAuth,
    resetAuth,
    setLogin,
  };
};

export default useAuth;
