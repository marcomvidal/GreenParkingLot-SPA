import { DateTime, Duration } from "luxon";

const elapsedTimeCalculation = (checkInTime: DateTime) =>
  checkInTime.diffNow(['hours', 'minutes']).negate();

const priceCalculation = (pricePerHour: number, checkInTimeSpan: Duration) =>
  pricePerHour * checkInTimeSpan.hours;

export { elapsedTimeCalculation, priceCalculation };
