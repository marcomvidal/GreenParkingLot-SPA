import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CheckIn from "models/CheckIn";
import SubmitFormSet from "components/SubmitFormSet";

const CheckInForm = () => {
  const history = useHistory();

  const { handleSubmit, formState: { isValid } } = useForm<CheckIn>({
    defaultValues: { carId: 1, spotId: 1, startTime: new Date() } as CheckIn,
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const onHide = () => history.goBack();
  
  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>Check out from spot X</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor='spot'>Spot</Form.Label>
            <Button onClick={() => history.push('/cars/create')}></Button>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='car'>Car</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='startTime'>Start time</Form.Label>
          </Form.Group>
        </Modal.Body>
        <SubmitFormSet onCancelClick={onHide} isValid={isValid} />
      </Form>
    </Modal>
  );
}

export default CheckInForm;
