import { Button, Card } from "react-bootstrap";
import { CarSpotButton, CarSpotProps } from "../types";
import { CarOverview } from "./CarOverview";

export const CarSpot = ({ spot }: CarSpotProps) => {
  const buttonProps: CarSpotButton = spot.car
    ? { variant: 'outline-secondary', label: 'Check out' }
    : { variant: 'success', label: 'Check in' };

  return (
    <Card className='h-100'>
      <Card.Body className='d-flex flex-column'>
        <h1 className='text-center'>{spot.label}</h1>
        <CarOverview car={spot.car} />

        <Button variant={ buttonProps.variant } className='btn-block mt-auto'>
          { buttonProps.label }
        </Button>
      </Card.Body>
    </Card>
  );
};
