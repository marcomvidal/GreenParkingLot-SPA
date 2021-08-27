import { Card } from 'react-bootstrap';
import Dot from 'components/Dot';
import { CarOverviewProps } from '../types';

const CarOverview = ({ car }: CarOverviewProps) => (
  <section className='my-auto text-center'>
    {car ? (
      <>
        <h5>
          {car.model} <Dot bg={car.color} data-testid='color-dot' />
        </h5>
        <Card.Subtitle className='mb-3 text-muted'>{car.licensePlate}</Card.Subtitle>
      </>
    ) : (
      <Card.Text className='text-center'>This spot is empty.</Card.Text>
    )}
  </section>
);

export default CarOverview;
