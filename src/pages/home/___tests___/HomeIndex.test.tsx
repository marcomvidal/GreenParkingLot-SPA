import { render, screen } from "@testing-library/react";
import { HomeIndex } from "../HomeIndex";

describe('Home Index', () => {
  it('should render all carousel items', () => {
    render(<HomeIndex />);

    const titles = [
      'A new car has arrived',
      'Mind about the parking spot',
      'Are you in a busy day?',
    ];

    const items = titles.map((item) => screen.getByText(item));

    items.forEach((item) => expect(item).toBeInTheDocument());
  });
});
