import { render, screen } from '@testing-library/react';
import Car from 'models/Car';
import CarOverview from '../components/CarOverview';

describe('Car Overview', () => {
  describe('when car is defined', () => {
    const car: Car = {
      model: 'Honda Civic Type R',
      licensePlate: 'AAA-0000',
      color: 'White',
    };

    beforeEach(() => render(<CarOverview car={car} />));

    it('should render a car when it is defined', () => {
      const elements = [
        screen.getByText(car.model),
        screen.getByText(car.licensePlate),
        screen.getByTestId('color-dot'),
      ];

      elements.forEach(element => expect(element).toBeInTheDocument());
    });

    it("should render the car's color", () => {
      const color = screen.getByTestId('color-dot');

      expect(color).toHaveStyle(`background-color: ${car.color}`);
    });
  });

  describe('when car is undefined', () => {
    beforeEach(() => render(<CarOverview car={undefined} />));

    it('should render a placeholder', () => {
      const placeholder = screen.getByText('This spot is empty.');

      expect(placeholder).toBeInTheDocument();
    });
  });
});
