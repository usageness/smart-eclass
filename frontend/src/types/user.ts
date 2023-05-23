interface User {
  id: string;
  password: string;
  nickname: string;
}

type UserLogin = Omit<User, 'nickname'>;
type UserProfile = Omit<User, 'password'>;
