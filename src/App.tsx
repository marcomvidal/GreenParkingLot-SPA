import Base from './pages/Base';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from 'store';

export const APP_NAME='Green Parking Lot'

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </Provider>;

export default App;
