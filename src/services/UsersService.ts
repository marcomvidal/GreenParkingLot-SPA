import Login from 'models/Login';
import LOGINS from 'pages/LoginForm/constants/logins';
import USERS from 'pages/LoginForm/constants/users';

const signIn = (login: Login) => {
  const foundLogin = LOGINS.find(
    ({ email, password }) => login.email === email && login.password === password,
  );

  return USERS.find(user => user.email === foundLogin?.email);
};

export { signIn };
