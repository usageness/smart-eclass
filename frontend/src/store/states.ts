import { atom } from 'recoil';

interface LoginState {
  isLogin: boolean;
  user?: UserProfile;
}

const loginState = atom<LoginState>({
  key: 'loginState',
  default: { isLogin: false },
});

export { loginState };
