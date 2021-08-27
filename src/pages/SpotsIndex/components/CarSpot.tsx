import { Button, Card } from 'react-bootstrap';
import { CarSpotButton, CarSpotProps } from '../types';
import CarOverview from './CarOverview';

const CarSpot = ({ spot, onSpotClick }: CarSpotProps) => {
  const buttonProps: CarSpotButton = spot.car
    ? { label: 'Check out', variant: 'outline-secondary', url: `/spots/${spot.id}/check-out` }
    : { label: 'Check in', variant: 'success', url: `/spots/${spot.id}/check-in` };

  return (
    <Card className='h-100'>
      <Card.Body className='d-flex flex-column'>
        <h1 className='text-center'>{spot.label}</h1>
        <CarOverview car={spot.car} />

        <Button
          variant={buttonProps.variant}
          className='btn-block mt-auto'
          onClick={() => onSpotClick(spot, buttonProps.url)}
        >
          {buttonProps.label}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarSpot;
