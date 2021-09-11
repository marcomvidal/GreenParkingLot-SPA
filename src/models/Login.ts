import Configuration from './Configuration';

type Login = Omit<Configuration, 'name' | 'baseTax'>;

export default Login;
