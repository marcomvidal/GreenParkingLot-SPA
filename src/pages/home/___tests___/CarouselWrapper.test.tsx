import { render, screen } from "@testing-library/react";
import { CAROUSEL_ITEMS } from "../carouselItems";
import { CarouselWrapper } from "../CarouselWrapper";

describe('Carousel Wrapper', () => {
  it('should render all carousel items', () => {
    render(<CarouselWrapper items={CAROUSEL_ITEMS} />);

    const titles = [
      'A new car has arrived',
      'Mind about the parking spot',
      'Are you in a busy day?',
    ];

    const items = titles.map((item) => screen.getByText(item));

    items.forEach((item) => expect(item).toBeInTheDocument());
  });
});
