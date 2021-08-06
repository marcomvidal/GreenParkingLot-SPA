import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Col, DropdownButton, Row } from "react-bootstrap";
import { getAll } from "services/SpotsService";
import CarSpot from "pages/SpotsIndex/components/CarSpot";
import SearchBar from "components/SearchBar";
import Spot from "../../models/Spot";
import SpotsForm from "../SpotsForm/SpotsForm";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import DropdownItem from "components/DropDownItem";
import './styles/SpotsIndex.css';

const SpotsIndex = () => {
  const history = useHistory();
  const spots = getAll();
  const [filteredSpots, setFilteredSpots] = useState<Spot[]>(spots);

  const onCreateSpot = () => history.push('/spots/create');

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();

    const filteringResult = spots.filter(
      ({ car }) => car?.model.toLowerCase().includes(value)
        || car?.licensePlate.toLowerCase().includes(value));
    
    setFilteredSpots(value.length > 0 ? filteringResult : spots);
  };

  return (
    <>
      <DropdownButton title='Actions' variant='success'>
        <DropdownItem onClick={onCreateSpot}>
          Add Spot
        </DropdownItem>
      </DropdownButton>

      <SearchBar
        placeholder='Search a car by its model or license plate'
        onChange={onSearchTextChange}
      />

      {spots && spots.length > 0
        ?
        <Row xs={1} md={2} lg={3}>
          {filteredSpots.map((spot: Spot) => 
            <Col key={spot.id} className='my-2'>
              <CarSpot spot={spot} />
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
          <h1>HELLO!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default SpotsIndex;
