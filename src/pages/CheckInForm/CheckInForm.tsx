import { useHistory } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { CheckInFormProps } from "./types";
import { getAll } from "services/CarsService";
import CarSelector from "./components/CarSelector";
import CheckIn from "models/CheckIn";
import FormField from "components/FormField";
import SubmitFormSet from "components/SubmitFormSet";
import { save } from "services/CheckInService";

const CheckInForm = ({ spot }: CheckInFormProps) => {
  const history = useHistory();
  const cars = getAll();
  const now = new Date().toISOString().substr(0, 16);

  const formData = useForm<CheckIn>({
    defaultValues: { carId: undefined, spotId: spot?.id, startTime: now },
    mode: 'onSubmit',
  });

  const { handleSubmit, formState: { errors, isValid }, register } = formData;
  const onHide = () => history.goBack();

  const onSubmit = (checkIn: CheckIn) => {
    save(checkIn);
    console.log('submitted!');
  };
  
  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <FormProvider {...formData}>
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
          <SubmitFormSet onCancelClick={onHide} isValid={isValid} />
        </Form>
      </FormProvider>
    </Modal>
  );
}

export default CheckInForm;
