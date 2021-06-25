import { Car } from "models/Car";
import { render, screen } from "@testing-library/react";
import { CarOverview } from "../CarOverview";

describe('Car Overview', () => {
  it('should render a car when it is defined', () => {
    const car = {
      model: 'Honda Civic Type R',
      licensePlate: 'AAA-0000',
      color: 'White',
    } as Car;

    render(<CarOverview car={car} />);

    const elements = [
      screen.getByText(`${car.model} (${car.color})`),
      screen.getByText(car.licensePlate),
    ];

    elements.forEach((element) => expect(element).toBeInTheDocument())
  });

  it('should render a placeholder when car is undefined', () => {
    render(<CarOverview car={undefined} />);

    const placeholder = screen.getByText('This spot is empty.');

    expect(placeholder).toBeInTheDocument();
  });
});
