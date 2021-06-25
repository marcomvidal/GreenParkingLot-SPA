import { Car } from "./Car";

export type Spot = {
  id: number,
  label: string,
  car: Car|undefined,
};
