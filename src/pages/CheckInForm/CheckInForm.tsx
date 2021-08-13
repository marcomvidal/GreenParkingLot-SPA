import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CheckInFormProps } from "./types";
import { getAll } from "services/CarsService";
import CarSelector from "./components/CarSelector";
import CheckIn from "models/CheckIn";
import Car from "models/Car";
import { useEffect } from "react";

const CheckInForm = ({ spot }: CheckInFormProps) => {
  const history = useHistory();
  const cars = getAll();
  const [selectedCar, setSelectedCar] = useState<Car>();

  const { handleSubmit, formState: { isValid } } = useForm<CheckIn>({
    defaultValues: { car: selectedCar, spot, startTime: new Date() } as CheckIn,
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const onCarSelect = (car: Car) => setSelectedCar(car);

  useEffect(() => {
    console.log(selectedCar);
  }, [selectedCar]);

  const onHide = () => history.goBack();
  
  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>Check in on spot {spot?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor='car'>Car</Form.Label>
            <CarSelector
              cars={cars}
              selectedCar={selectedCar}
              onChange={onCarSelect}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='startTime'>Start time</Form.Label>
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

export default CheckInForm;
