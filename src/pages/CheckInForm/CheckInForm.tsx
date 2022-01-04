import { useHistory } from 'react-router-dom';
import { Form, Modal } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckInFormProps } from './types';
import { getAll } from 'services/CarsService';
import CarSelector from './components/CarSelector';
import CheckIn from 'models/CheckIn';
import FormField from 'components/FormField';
import SubmitFormSet from 'components/SubmitFormSet';
import { save } from 'services/CheckInService';

const CheckInForm = ({ spot }: CheckInFormProps) => {
  const history = useHistory();
  const cars = getAll();
  const now = new Date().toISOString().substr(0, 16);

  const form = useForm<CheckIn>({
    defaultValues: { carId: undefined, spotId: spot?.id, startTime: now },
    mode: 'onChange',
  });

  const { handleSubmit, register, formState: { errors, isValid } } = form;

  const onHide = () => history.goBack();

  const onSubmit = (checkIn: CheckIn) => {
    console.log(checkIn);
    save(checkIn);
    onHide();
  };

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <FormProvider {...form}>
        <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
          <Modal.Header closeButton>
            <Modal.Title>Check in on spot {spot?.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CarSelector name='carId' cars={cars} />
            <FormField
              id='startTime'
              label='Start time'
              type='datetime-local'
              errors={errors.startTime}
              defaultValue={now}
              {...register('startTime')}
            />
          </Modal.Body>
          <SubmitFormSet onCancelClick={onHide} isSubmitDisabled={!isValid} />
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default CheckInForm;
