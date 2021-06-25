import { Spot } from "models/Spot";
import { Button, Card } from "react-bootstrap";
import { CarOverview } from "./CarOverview";

type ButtonProps = {
  variant: string,
  label: string,
}

type Props = {
  spot: Spot,
};

export const CarSpot = ({ spot }: Props) => {
  const buttonProps: ButtonProps  = spot.car
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
