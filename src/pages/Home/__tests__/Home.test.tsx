import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe('Carousel Wrapper', () => {
  it('should render all carousel items', () => {
    render(<Home />);

    const elements = [
      screen.getByText('A new car has arrived'),
      screen.getByText('Mind about the parking spot'),
      screen.getByText('Are you in a busy day?'),
    ];

    elements.forEach((element) => expect(element).toBeInTheDocument());
  });
});
