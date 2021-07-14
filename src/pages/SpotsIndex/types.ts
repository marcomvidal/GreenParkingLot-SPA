import { Car } from "models/Car";
import { Spot } from "models/Spot";

export type CarSpotButton = {
  variant: string,
  label: string,
};

export type CarSpotProps = {
  spot: Spot,
};

export type CarOverviewProps = {
  car: Car|undefined,
};

export type NoSpotPlaceholderProps = {
  onCreateSpot: () => void;
};
