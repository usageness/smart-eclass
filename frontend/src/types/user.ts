interface User {
  userid: string;
  password: string;
  username: string;
}

interface UserInfomation {
  id: number;
  userid: string;
  username: string;
  password: string;
  privilege: string;
}

type UserLogin = Omit<User, 'username'>;
type UserProfile = Omit<User, 'password'>;
