import CAROUSEL_ITEMS from './constants/carouselItems';
import CarouselWrapper from './components/CarouselWrapper';

const Home = () => {
  const carouselItems = CAROUSEL_ITEMS;

  return <CarouselWrapper items={carouselItems} />;
};

export default Home;
