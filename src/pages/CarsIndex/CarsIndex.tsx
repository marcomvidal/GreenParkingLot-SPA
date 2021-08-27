import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getAll } from "services/CarsService";
import Car from "models/Car";
import CarsForm from "pages/CarsForm/CarsForm";
import CarsTable from "./components/CarsTable";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import DropdownItem from "components/DropDownItem";
import ActionBar from "components/ActionBar";

const CarsIndex = () => {
  const history = useHistory();
  const cars = getAll();
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const onCreateCar = () => history.push('/cars/create');

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();

    const filteringResult = cars.filter(
      (car) => car?.model.toLowerCase().includes(value)
        || car?.licensePlate.toLowerCase().includes(value));

    setFilteredCars(filteringResult);
  };

  return (
    <>
      <ActionBar
        searchPlaceholder='Search a car by its model or license plate'
        onSearchTextChange={onSearchTextChange}>
        <DropdownItem onClick={onCreateCar}>Add car</DropdownItem>
      </ActionBar>

      {cars.length > 0
        ?
        <CarsTable cars={filteredCars} />
        :
        <EmptyPlaceholder message='No cars registered yet.' onClick={onCreateCar} />
      }
      
      <Switch>
        <Route path={['/cars/create', '/cars/:id']}>
          <CarsForm />
        </Route>
      </Switch>
    </>
  );
};

export default CarsIndex;
