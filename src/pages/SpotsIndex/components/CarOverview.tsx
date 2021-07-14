import { Card } from "react-bootstrap";
import { CarOverviewProps } from "../types";

export const CarOverview = ({ car }: CarOverviewProps) => (
  <section className='my-auto text-center'>
    {car ?
      <>
        <h5>{car.model} ({car.color})</h5>
        <Card.Subtitle className='mb-3 text-muted'>
          {car.licensePlate}
        </Card.Subtitle>
      </>
    :
      <Card.Text className='text-center'>This spot is empty.</Card.Text>
    }
  </section>
);
