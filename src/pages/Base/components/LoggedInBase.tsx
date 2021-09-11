import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LINKS from '../constants/links';
import NavigationBar from './NavigationBar';
import Home from 'pages/Home';
import SpotsIndex from 'pages/SpotsIndex';
import CarsIndex from 'pages/CarsIndex';
import Configurations from 'pages/Configurations';

const LoggedInBase = () => (
  <>
    <NavigationBar links={LINKS} />
    <Container className='h-100' style={{ paddingTop: '4rem' }}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cars'>
          <CarsIndex />
        </Route>
        <Route path='/configurations'>
          <Configurations />
        </Route>
        <Route path='/spots'>
          <SpotsIndex />
        </Route>
      </Switch>
    </Container>
  </>
);

export default LoggedInBase;
