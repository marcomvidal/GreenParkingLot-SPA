import Spot from "models/Spot";
import CARS from "pages/CarsIndex/constants/cars";

const SPOTS: Spot[] = [
  { id: 1, label: '1', car: CARS[0] },
  { id: 2, label: '2', car: undefined },
  { id: 3, label: '3', car: CARS[1] },
  { id: 4, label: '4', car: CARS[2] },
  { id: 5, label: '5', car: CARS[3] },
  { id: 6, label: '6', car: CARS[4] },
  { id: 7, label: '7', car: undefined },
  { id: 8, label: '8', car: CARS[5] },
];

export default SPOTS;
