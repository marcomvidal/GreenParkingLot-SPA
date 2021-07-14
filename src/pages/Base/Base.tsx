import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "../Home";
import { SpotsIndex } from "../SpotsIndex";
import { LINKS } from "./data/links";

export const Base = () => (
  <BrowserRouter>
    <NavigationBar links={LINKS} />
    <Container className='h-100' style={{ paddingTop: '4rem' }}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/spots'>
          <SpotsIndex />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter>
);
