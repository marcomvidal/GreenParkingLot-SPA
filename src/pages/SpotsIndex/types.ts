import Car from "models/Car";
import Spot from "models/Spot";

type CarSpotButton = {
  label: string;
  variant: string;
  url: string;
};

type CarSpotProps = {
  spot: Spot;
  onSpotClick: (spot: Spot, url: string) => void;
};

type CarOverviewProps = {
  car: Car | undefined;
};

type NoSpotPlaceholderProps = {
  onCreateSpot: () => void;
};

export type {
  CarSpotButton,
  CarSpotProps,
  CarOverviewProps,
  NoSpotPlaceholderProps,
};
