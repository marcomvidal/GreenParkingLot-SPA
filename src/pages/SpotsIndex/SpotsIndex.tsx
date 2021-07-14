import { CarSpot } from "pages/SpotsIndex/components/CarSpot";
import { useEffect, useState } from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Route, Switch, useHistory } from "react-router-dom";
import { getAll } from "services/SpotsService";
import { Spot } from "../../models/Spot";
import { SpotsForm } from "../SpotsForm/SpotsForm";
import { NoSpotPlaceholder } from "./components/NoSpotPlaceholder";

export const SpotsIndex = () => {
  const history = useHistory();
  const [spots, setSpots] = useState<Spot[]>([]);

  const onCreateSpot = () => { history.push('/spots/create'); };

  useEffect(() => {
    setSpots(getAll());
  }, []);

  return (
    <>
      <DropdownButton title='Actions' variant='success'>
        <Dropdown.Item onClick={onCreateSpot}>
          Add Spot
        </Dropdown.Item>
      </DropdownButton>

      { spots && spots.length > 0
        ?
        <Row xs={1} md={2} lg={3}>
          {spots.map((spot: Spot) => 
            <Col key={spot.id} className='my-2'>
              <CarSpot spot={spot} />
            </Col>
          )}
        </Row>
        :
        <NoSpotPlaceholder onCreateSpot={onCreateSpot} />
      }

      <Switch>
        <Route path='/spots/create'>
          <SpotsForm />
        </Route>
        <Route path='/spots/:id/check-in'>
          <h1>HELLO!</h1>
        </Route>
      </Switch>
    </>
  );
}
