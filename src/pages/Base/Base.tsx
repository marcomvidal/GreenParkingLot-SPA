import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Home from '../Home';
import SpotsIndex from '../SpotsIndex';
import CarsIndex from 'pages/CarsIndex/CarsIndex';
import LINKS from './data/links';
import Login from 'pages/LoginForm';

const Base = () => (
  <>
    <NavigationBar links={LINKS} />
    <Container className='h-100' style={{ paddingTop: '4rem' }}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/spots'>
          <SpotsIndex />
        </Route>
        <Route path='/cars'>
          <CarsIndex />
        </Route>
      </Switch>
    </Container>
  </>
);

export default Base;
