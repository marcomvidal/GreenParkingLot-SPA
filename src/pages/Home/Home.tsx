import { CAROUSEL_ITEMS } from "./data/carouselItems";
import { CarouselWrapper } from "./components/CarouselWrapper";

export const Home = () => {
  const carouselItems = CAROUSEL_ITEMS;

  return (<CarouselWrapper items={carouselItems} />);
};
