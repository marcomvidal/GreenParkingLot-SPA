import Car from "models/Car";
import Spot from "models/Spot";

type CarSpotButton = {
  variant: string,
  label: string,
};

type CarSpotProps = {
  spot: Spot,
};

type CarOverviewProps = {
  car: Car|undefined,
};

type NoSpotPlaceholderProps = {
  onCreateSpot: () => void;
};

export type { CarSpotButton, CarSpotProps, CarOverviewProps, NoSpotPlaceholderProps };
