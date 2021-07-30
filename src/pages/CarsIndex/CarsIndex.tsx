import { Route, Switch, useHistory } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CarsForm from "pages/CarsForm/CarsForm";
import { getAll } from "services/CarsService";
import CarsTable from "./components/CarsTable";
import EmptyPlaceholder from "components/EmptyPlaceholder";

const CarsIndex = () => {
  const history = useHistory();
  const cars = getAll();
  const onCreateCar = () => history.push('/cars/create');

  return (
    <>
      <DropdownButton title='Actions' variant='success'>
        <Dropdown.Item onClick={onCreateCar}>
          Add car
        </Dropdown.Item>
      </DropdownButton>

      {cars && cars.length > 0
        ?
        <CarsTable cars={cars} />
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
