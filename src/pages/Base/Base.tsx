import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import Login from 'pages/LoginForm';
import LoggedInBase from './components/LoggedInBase';

const Base = () => {
  const user = useSelector((state: RootState) => state.user);

  return (user.isLoggedIn ? <LoggedInBase /> : <Login />);
};

export default Base;
