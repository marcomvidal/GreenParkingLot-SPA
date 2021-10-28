import { Col, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DateTime } from 'luxon';
import CheckIn from 'models/CheckIn';
import SubmitFormSet from 'components/SubmitFormSet';
import { CheckOutFormProps } from './types';
import { elapsedTimeCalculation, priceCalculation } from './utils/calculations';
import CarOverview from 'pages/SpotsIndex/components/CarOverview';
import { getBySpotId } from 'services/CheckInService';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';

const CheckOutForm = ({ spot }: CheckOutFormProps) => {
  const history = useHistory();
  const { baseTax } = useSelector((state: RootState) => state.user);
  const startTime = getBySpotId(spot?.id!)?.startTime;
  const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const elapsedTime = elapsedTimeCalculation(startTime!);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm<CheckIn>({
    defaultValues: { carId: 1, spotId: 1, startTime: DateTime.now().toJSDate() } as CheckIn,
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
          <div className='h-100 d-flex align-items-center'>
            <Col>
              <CarOverview car={spot?.car} />
            </Col>
            <Col>
              <ul>
                <li>
                  <strong>Started at:</strong> {startTime?.toLocaleString()}
                </li>
                <li>
                  <strong>Price / hour:</strong> {currency.format(baseTax)}
                </li>
                <li>
                  <strong>Time elapsed:</strong> {elapsedTime.toFormat('hh:mm')}
                </li>
                <li>
                  <strong>Total:</strong> {currency.format(priceCalculation(baseTax, elapsedTime))}
                </li>
              </ul>
            </Col>
          </div>
        </Modal.Body>
        <SubmitFormSet onCancelClick={onHide} isSubmitDisabled={!isValid} />
      </Form>
    </Modal>
  );
};

export default CheckOutForm;
