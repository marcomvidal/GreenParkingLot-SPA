import { Car } from "pages/spots/Car";
import { Spot } from "pages/spots/Spot";
import { Card } from "react-bootstrap";

type Props = {
  numberShown: number,
  spot: Spot,
  car: Car|undefined,
};

export const CarSpot = ({ numberShown, spot, car }: Props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>
          <h1>{(numberShown + 1)}</h1>
        </Card.Title>

        {car &&
          <Card.Text>
            <strong>Model:</strong> {car.model} <br />
            <strong>License Plate:</strong> {car.licensePlate} <br />
            <strong>Color:</strong> {car.color}
          </Card.Text>
        }
          
        {!car &&
          <Card.Text className='text-center'>
            This spot is empty.
          </Card.Text>
        }
      </Card.Body>
    </Card>
  );
};
