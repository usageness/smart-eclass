interface User {
  userid: string;
  password: string;
  username: string;
}

type UserLogin = Omit<User, 'username'>;
type UserProfile = Omit<User, 'password'>;
