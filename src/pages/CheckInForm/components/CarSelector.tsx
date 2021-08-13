import Dot from "components/Dot";
import CarListGroup from "./CarListGroup";
import CarListGroupItem from "./CarListGroupItem";
import { CarSelectorProps } from "../types";

const CarSelector = ({ cars, onChange, selectedCar }: CarSelectorProps) => (
  <CarListGroup>
    {cars.map((car, key) => 
      <CarListGroupItem
        key={key}
        isSelected={selectedCar?.id === car.id}
        onClick={() => onChange(car)}>
        <h6 style={{ margin: 0 }}>
          <Dot key={car.id} bg={car.color} size='sm' />
          {' '}
          {car.model} ({car.licensePlate})
        </h6>
      </CarListGroupItem>
    )}
  </CarListGroup>
);

export default CarSelector;
