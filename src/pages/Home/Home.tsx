import { CAROUSEL_ITEMS } from "./data/carouselItems";
import { CarouselWrapper } from "./components/CarouselWrapper";

export const Home = () => (
  <CarouselWrapper items={CAROUSEL_ITEMS} />
);
