import { Button, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CheckIn from 'models/CheckIn';
import SubmitFormSet from 'components/SubmitFormSet';
import { CheckOutFormProps } from './types';
import CarOverview from 'pages/SpotsIndex/components/CarOverview';

const CheckInForm = ({ spot }: CheckOutFormProps) => {
  const history = useHistory();

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm<CheckIn>({
    defaultValues: { carId: 1, spotId: 1, startTime: new Date() } as CheckIn,
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onHide = () => history.goBack();

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>Check out from spot {spot?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarOverview car={spot?.car} />
          <h5>Start at: DATE</h5>
          <h5>Total: R$ XX</h5>
        </Modal.Body>
        <SubmitFormSet onCancelClick={onHide} isSubmitDisabled={!isValid} />
      </Form>
    </Modal>
  );
};

export default CheckInForm;
