import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Dot from "components/Dot";
import { CarsTableProps } from "../types";

const CarsTable = ({ cars }: CarsTableProps) => {
  const history = useHistory();
  const columns = ['Model', 'License Plate'];
  const onClickAtCar = (id?: number) => history.push(`/cars/${id}`);

  return (
    <Table striped bordered hover className='mt-2'>
      <thead>
        <tr>
          {columns.map((column, key) => <th key={key}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {cars.map((car, key) =>
          <tr key={key} onClick={() => onClickAtCar(car.id)}>
            <td>
              <Dot bg={car.color} size='sm' className='mr-1' data-testid={`dot-${key}`} />
              {car.model}
            </td>
            <td>{car.licensePlate}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CarsTable;
