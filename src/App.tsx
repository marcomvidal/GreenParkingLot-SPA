import Base from './pages/Base';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const APP_NAME='Green Parking Lot'

const App = () => <BrowserRouter><Base /></BrowserRouter>;

export default App;
