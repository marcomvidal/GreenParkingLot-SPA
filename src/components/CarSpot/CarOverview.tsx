import { Car } from "models/Car";
import { Card } from "react-bootstrap";

type Props = {
  car: Car|undefined,
};

export const CarOverview = ({ car }: Props) => (
  <section className='my-auto text-center'>
    {car ?
      <>
        <h5>{car.model} ({car.color})</h5>

        <Card.Subtitle className='mb-3 text-muted'>
          {car.licensePlate}
        </Card.Subtitle>
      </>
    :
      <Card.Text className='text-center'>
        This spot is empty.
      </Card.Text>
    }
  </section>
);
