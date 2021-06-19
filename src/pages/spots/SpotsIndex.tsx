import { CarSpot } from "components/CarSpot/CarSpot";
import { Col, Row } from "react-bootstrap";
import { Spot } from "./Spot";

export const SpotsIndex = () => {
  const spots: Spot[] = [
    {
      id: 1,
      car: { model: '3000 GT Twinturbo', licensePlate: 'AAA-0001', color: 'Red' },
    },
    {
      id: 2,
      car: undefined,
    },
    {
      id: 3,
      car: { model: 'Viper GTS', licensePlate: 'AAA-0003', color: 'Yellow' },
    },
    {
      id: 4,
      car: { model: 'R33 Skyline GT-R', licensePlate: 'AAA-0004', color: 'Green' },
    },
    {
      id: 5,
      car: { model: 'Supra RZ', licensePlate: 'AAA-0005', color: 'Orange' },
    },
    {
      id: 6,
      car: { model: 'DB7 Coupe', licensePlate: 'AAA-0006', color: 'Purple' },
    },
    {
      id: 7,
      car: undefined,
    },
    {
      id: 8,
      car: { model: 'RX-7 A-Spec', licensePlate: 'AAA-0008', color: 'Teal' },
    },
    {
      id: 9,
      car: { model: 'Impreza WRX', licensePlate: 'AAA-0009', color: 'Brown' },
    },
    {
      id: 10,
      car: { model: 'NSX Type S Zero', licensePlate: 'AAA-0010', color: 'Beige' },
    },
    {
      id: 11,
      car: { model: 'Corvette ZR-4', licensePlate: 'AAA-0011', color: 'Gray' },
    },
    {
      id: 12,
      car: { model: 'Griffith Blackpool', licensePlate: 'AAA-0012', color: 'Black' },
    },
  ];

  return (
    <Row xs={2} md={3} lg={4} className='row-eq-height'>
      {spots.map((spot: Spot, key) => 
        <Col key={spot.id} className='my-2'>
          <CarSpot numberShown={key} spot={spot} car={spot.car} />
        </Col>
      )}
    </Row>
  );
}
