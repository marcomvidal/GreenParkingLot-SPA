import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Modal } from 'react-bootstrap';
import { SchemaOf, object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Car from 'models/Car';
import CARS from 'pages/CarsIndex/constants/cars';
import EMPTY_CAR from './constants/emptyCar';
import { CarsFormParams } from './types';
import { save } from 'services/CarsService';
import FormField from 'components/FormField';
import SubmitFormSet from 'components/SubmitFormSet';

const CarsForm = () => {
  const { id } = useParams<CarsFormParams>();
  const history = useHistory();
  const car = CARS[Number(id) - 1] ?? EMPTY_CAR;

  const schema: SchemaOf<Car> = object({
    id: number().notRequired(),
    model: string().label('Model').min(2).max(30).required(),
    licensePlate: string().label('License Plate').min(2).max(10).required(),
    color: string().label('Color').required(),
  }).defined();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Car>({
    defaultValues: car,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: Car) => {
    save(data);
    onHide();
  };

  const onHide = () => history.goBack();

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>
            {car.id ? `Editting ${car.model} (${car.licensePlate})` : 'New car'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormField id='model' label='Model' errors={errors.model} {...register('model')} />
          <FormField
            id='licensePlate'
            label='License Plate'
            errors={errors.licensePlate}
            {...register('licensePlate')}
          />
          <FormField
            id='color'
            label='Color'
            type='color'
            errors={errors.color}
            {...register('color')}
          />
        </Modal.Body>
        <SubmitFormSet onCancelClick={onHide} isSubmitDisabled={!isValid} />
      </Form>
    </Modal>
  );
};

export default CarsForm;
