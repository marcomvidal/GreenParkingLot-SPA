import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { CarsIndex } from "../cars/CarsIndex";
import { HomeIndex } from "../home/HomeIndex";

export const BaseIndex = () => (
  <>
    <NavigationBar />
    <Container>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeIndex />
          </Route>
          <Route path='/cars'>
            <CarsIndex />
          </Route>
        </Switch>
      </Router>
    </Container>
  </>
);

