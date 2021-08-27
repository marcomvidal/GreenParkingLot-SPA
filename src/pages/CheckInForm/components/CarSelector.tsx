import { ListGroup } from 'react-bootstrap';
import { useController, useFormContext } from 'react-hook-form';
import Dot from 'components/Dot';
import CarListGroup from './CarListGroup';
import { Form } from 'react-bootstrap';
import { CarSelectorProps } from '../types';

const CarSelector = ({ cars, name, defaultValue }: CarSelectorProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { onChange, value },
  } = useController({ name, control, defaultValue, rules: { required: true } });

  return (
    <Form.Group>
      <Form.Label htmlFor='carId'>Car</Form.Label>
      <CarListGroup>
        {cars.map((car, key) => (
          <ListGroup.Item
            key={key}
            type='button'
            active={value === car.id}
            onClick={() => onChange(car.id)}
            variant='success'
            action
          >
            <h6 style={{ margin: 0 }}>
              <Dot key={car.id} bg={car.color} size='sm' /> {car.model} ({car.licensePlate})
            </h6>
          </ListGroup.Item>
        ))}
      </CarListGroup>

      <Form.Control.Feedback type='invalid'>{errors?.message}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default CarSelector;
