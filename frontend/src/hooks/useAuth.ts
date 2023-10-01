import { requestValidateToken } from 'apis/request/auth';
import { useEffect } from 'react';
import { useResetRecoilState, useRecoilState } from 'recoil';
import { loginState } from 'store/states';

interface Token {
  accessToken: string;
}

const useAuth = () => {
  const [{ isLogin, user }, setLoginInfo] = useRecoilState(loginState);
  const resetLoginInfo = useResetRecoilState(loginState);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    const checkUserTokenValidate = async () => {
      const userInfo = (await requestValidateToken()) as UserInfomation;
      if (!userInfo) {
        localStorage.removeItem('accessToken');
        return;
      }
      setLogin({ userid: userInfo.userid, username: userInfo.username });
    };

    checkUserTokenValidate();
  }, []);

  const setAuth = ({ accessToken }: Token) => {
    localStorage.setItem('accessToken', accessToken.toString());
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
