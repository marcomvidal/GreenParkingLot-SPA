import { render, screen } from "@testing-library/react";
import { Spot } from "models/Spot";
import { CarSpot } from "../components/CarSpot";

describe('Car Spot', () => {
  it('should render a car spot with number', () => {
    const car = { model: 'Civic Type R', licensePlate: 'AAA-0000', color: 'White' }
    const spot = { id: 1, label: '10', car } as Spot;

    render(<CarSpot spot={spot} />);

    const elements = [
      screen.getByText(spot.label),
      screen.getByText(`${car.model} (${car.color})`),
    ];
    
    elements.forEach((element) => expect(element).toBeInTheDocument());
  });
});