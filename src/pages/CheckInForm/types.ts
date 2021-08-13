import Car from "models/Car";
import Spot from "models/Spot";

type CarListGroupItemProps = {
  isSelected: boolean;
};

type CarSelectorProps = {
  cars: Car[];
  selectedCar?: Car;
  onChange: (car: Car) => void;
};

type CheckInFormProps = {
  spot?: Spot;
};

export type { CarListGroupItemProps, CarSelectorProps, CheckInFormProps };
