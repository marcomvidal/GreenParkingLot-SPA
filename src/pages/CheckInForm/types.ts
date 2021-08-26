import Car from "models/Car";
import Spot from "models/Spot";

type CarListGroupItemProps = {
  isSelected: boolean;
};

type CarSelectorProps = {
  cars: Car[];
  name: string;
  defaultValue?: number;
};

type CheckInFormProps = {
  spot?: Spot;
};

export type { CarListGroupItemProps, CarSelectorProps, CheckInFormProps };
