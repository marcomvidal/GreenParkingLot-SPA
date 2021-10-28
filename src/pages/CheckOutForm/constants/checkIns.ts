import { DateTime, DurationLike } from "luxon";
import CheckIn from "models/CheckIn";
import CARS from "pages/CarsIndex/constants/cars";
import SPOTS from "pages/SpotsIndex/constants/spots";

const checkInTime = (timeAgo: DurationLike) =>
  DateTime.now().minus(timeAgo).toJSDate();

const CHECK_INS: CheckIn[] = [
  { id: 1, spotId: SPOTS[0].id!, carId: CARS[0].id, startTime: checkInTime({ hours: 1 }) },
  { id: 3, spotId: SPOTS[2].id!, carId: CARS[1].id, startTime: checkInTime({ hours: 2 }) },
  { id: 4, spotId: SPOTS[3].id!, carId: CARS[2].id, startTime: checkInTime({ hours: 1, minutes: 30 }) },
  { id: 5, spotId: SPOTS[4].id!, carId: CARS[3].id, startTime: checkInTime({ hours: 2, minutes: 15 }) },
  { id: 6, spotId: SPOTS[5].id!, carId: CARS[4].id, startTime: checkInTime({ hours: 0, minutes: 30 }) },
  { id: 8, spotId: SPOTS[7].id!, carId: CARS[5].id, startTime: checkInTime({ hours: 1, minutes: 15 }) },
];

export default CHECK_INS;
