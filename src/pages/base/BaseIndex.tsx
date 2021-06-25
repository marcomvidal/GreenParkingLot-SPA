import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { HomeIndex } from "../home/HomeIndex";
import { LINKS } from "./links";
import { SpotsIndex } from "pages/spots/SpotsIndex";

export const BaseIndex = () => (
  <>
    <BrowserRouter>
      <NavigationBar links={LINKS} />
      <Container className='my-2'>
        <Switch>
          <Route exact path='/'>
            <HomeIndex />
          </Route>
          <Route path='/spots'>
            <SpotsIndex />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  </>
);
