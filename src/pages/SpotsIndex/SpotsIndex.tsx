import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { getAll } from "services/SpotsService";
import CarSpot from "pages/SpotsIndex/components/CarSpot";
import Spot from "../../models/Spot";
import SpotsForm from "../SpotsForm/SpotsForm";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import DropdownItem from "components/DropDownItem";
import './styles/SpotsIndex.css';
import CheckInForm from "pages/CheckInForm";
import CheckOutForm from "pages/CheckOutForm";
import ActionBar from "components/ActionBar";

const SpotsIndex = () => {
  const history = useHistory();
  const spots = getAll();
  const [filteredSpots, setFilteredSpots] = useState<Spot[]>(spots);
  const [currentSpot, setCurrentSpot] = useState<Spot|undefined>();

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();

    const filteringResult = spots.filter(
      ({ car }) => car?.model.toLowerCase().includes(value)
        || car?.licensePlate.toLowerCase().includes(value));
    
    setFilteredSpots(value.length > 0 ? filteringResult : spots);
  };

  const onSpotClick = (spot: Spot, url: string) => {
    setCurrentSpot(spot);
    history.push(url);
  };

  const onCreateSpot = () => history.push('/spots/create');

  return (
    <>
      <ActionBar
        searchPlaceholder='Search a car by its model or license plate'
        onSearchTextChange={onSearchTextChange}>
        <DropdownItem onClick={onCreateSpot}>Add spot</DropdownItem>
      </ActionBar>

      {spots.length > 0
        ?
        <Row xs={1} md={2} lg={3}>
          {filteredSpots.map((spot: Spot) => 
            <Col key={spot.id} className='my-2'>
              <CarSpot spot={spot} onSpotClick={onSpotClick} />
            </Col>
          )}
        </Row>
        :
        <EmptyPlaceholder message='No spots registered yet.' onClick={onCreateSpot} />
      }

      <Switch>
        <Route path='/spots/create'>
          <SpotsForm />
        </Route>
        <Route path='/spots/:id/check-in'>
          <CheckInForm spot={currentSpot} />
        </Route>
        <Route path='/spots/:id/check-out'>
          <CheckOutForm />
        </Route>
      </Switch>
    </>
  );
}

export default SpotsIndex;
