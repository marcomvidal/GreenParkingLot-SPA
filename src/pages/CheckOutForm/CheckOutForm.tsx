import { Col, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import CheckIn from 'models/CheckIn';
import SubmitFormSet from 'components/SubmitFormSet';
import { CheckOutFormProps } from './types';
import { elapsedTimeCalculation, priceCalculation } from './utils/calculations';
import CarOverview from 'pages/SpotsIndex/components/CarOverview';
import { getBySpotId } from 'services/CheckInService';
import { RootState } from 'store/types';
import { save } from 'services/CheckOutService';

const CheckOutForm = ({ spot }: CheckOutFormProps) => {
  const history = useHistory();
  const { baseTax } = useSelector((state: RootState) => state.user);
  const startTime = DateTime.fromISO(getBySpotId(spot?.id!)?.startTime!);
  const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const elapsedTime = elapsedTimeCalculation(startTime!);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm<CheckIn>({
    defaultValues: { carId: 1, spotId: 1, startTime: DateTime.now().toISO() } as CheckIn,
    mode: 'onChange',
  });

  const onSubmit = () => {
    if (spot?.id) {
      console.log(spot?.id);
      save(spot?.id);
    }
    
    onHide();
  };

  const onHide = () => history.goBack();

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>Check out from spot {spot?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='h-100 d-flex align-items-center'>
            <Col>
              <CarOverview car={spot?.car} />
            </Col>
            <Col className='text-center'>
              <div>
                <h4>{currency.format(baseTax)} x {elapsedTime.toFormat('hh:mm')} hours</h4>
              </div>
              <div className='text-muted'>
                Started at {startTime.toLocaleString(DateTime.DATETIME_MED)}
              </div>
            </Col>
            <Col className='text-center'>
              <div>
                <strong>Total:</strong>
              </div>
              <div>
                <h1>{currency.format(priceCalculation(baseTax, elapsedTime))}</h1>
              </div>
            </Col>
          </div>
        </Modal.Body>
        <SubmitFormSet submitButtonText='Check out' onCancelClick={onHide} isSubmitDisabled={!isValid} />
      </Form>
    </Modal>
  );
};

export default CheckOutForm;
