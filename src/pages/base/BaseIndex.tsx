import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { SpotsIndex } from "../spots/SpotsIndex";
import { HomeIndex } from "../home/HomeIndex";

export const BaseIndex = () => (
  <>
    <Router>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path='/'>
            <HomeIndex />
          </Route>
          <Route path='/spots'>
            <SpotsIndex />
          </Route>
        </Switch>
      </Container>
    </Router>
  </>
);
