import { CarSpot } from "components/CarSpot/CarSpot";
import { useState } from "react";
import {  Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Spot } from "../../models/Spot";
import { SpotsForm } from "./SpotsForm";

export const SpotsIndex = () => {
  const spots: Spot[] = [
    {
      id: 1,
      label: '1',
      car: { model: '3000 GT Twinturbo', licensePlate: 'AAA-0001', color: 'Red' },
    },
    {
      id: 2,
      label: '2',
      car: undefined,
    },
    {
      id: 3,
      label: '3',
      car: { model: 'Viper GTS', licensePlate: 'AAA-0003', color: 'Yellow' },
    },
    {
      id: 4,
      label: '4',
      car: { model: 'R33 Skyline GT-R', licensePlate: 'AAA-0004', color: 'Green' },
    },
    {
      id: 5,
      label: '5',
      car: { model: 'Supra RZ', licensePlate: 'AAA-0005', color: 'Orange' },
    },
    {
      id: 6,
      label: '6',
      car: { model: 'DB7 Coupe', licensePlate: 'AAA-0006', color: 'Purple' },
    },
    {
      id: 7,
      label: '7',
      car: undefined,
    },
    {
      id: 8,
      label: '8',
      car: { model: 'RX-7 A-Spec', licensePlate: 'AAA-0008', color: 'Teal' },
    },
  ];

  const [isSpotsFormOpened, setIsSpotsFormOpened] = useState(false);

  return (
    <>
      <SpotsForm
        isOpened={isSpotsFormOpened} onHide={() => setIsSpotsFormOpened(false)} />
      
      <div>
        <DropdownButton title="Actions" variant='success'>
          <Dropdown.Item onClick={() => setIsSpotsFormOpened(true)}>
            Add Spot
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <Row xs={1} md={2} lg={3}>
        {spots.map((spot: Spot) => 
          <Col key={spot.id} className='my-2'>
            <CarSpot spot={spot} />
          </Col>
        )}
      </Row>
    </>
  );
}
