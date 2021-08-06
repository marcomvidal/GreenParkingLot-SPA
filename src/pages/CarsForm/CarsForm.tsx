import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { SchemaOf, object, string, number } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Car from "models/Car";
import CARS from "pages/CarsIndex/constants/cars";
import EMPTY_CAR from "./constants/emptyCar";
import { CarsFormParams } from "./types";
import FormControl from "components/FormControl";
import { save } from "services/CarsService";

const CarsForm = () => {
  const { id } = useParams<CarsFormParams>();
  const history = useHistory();

  const schema: SchemaOf<Car> = object({
    id: number().notRequired(),
    model: string().label('Model').min(2).max(30).required(),
    licensePlate: string().label('License Plate').min(2).max(10).required(),
    color: string().label('Color').required(),
  }).defined();

  const { handleSubmit, register, formState: { errors, isValid } } = useForm<Car>({
    defaultValues: CARS[(Number(id) - 1)] ?? EMPTY_CAR,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: Car) => {
    save(data);
  }

  const onHide = () => { history.goBack() };

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>New car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor='model'>Model</Form.Label>
            <FormControl
              id='model'
              isInvalid={errors.model !== undefined}
              { ...register('model') }
            />
            <Form.Control.Feedback type='invalid'>
              {errors.model?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='licensePlate'>License Plate</Form.Label>
            <FormControl
              id='licensePlate'
              isInvalid={errors.licensePlate !== undefined}
              { ...register('licensePlate') }
            />
            <Form.Control.Feedback type='invalid'>
              {errors.licensePlate?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='color'>Color</Form.Label>
            <FormControl
              id="color"
              type="color"
              { ...register('color') }
            />
            <Form.Control.Feedback type='invalid'>
              {errors.color?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={onHide}>Cancel</Button>
          <Button variant='success' type='submit' disabled={!isValid}>Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CarsForm;
