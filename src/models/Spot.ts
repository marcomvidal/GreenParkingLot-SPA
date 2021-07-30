import Car from "./Car";

type Spot = {
  id?: number,
  label: string,
  car: Car|undefined,
};

export default Spot;