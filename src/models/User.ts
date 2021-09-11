import Configuration from './Configuration';

type User = Omit<Configuration, 'password'> & {
  isLoggedIn: boolean;
};

export default User;
