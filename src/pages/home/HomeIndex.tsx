import { Carousel } from "react-bootstrap";
import CarouselPlaceholder from './carousel-placeholder.svg';

type CarouselItem = {
  title: string,
  caption: string,
  placeholder: string,
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: 'A new car has arrived',
    caption: 'Register it and its characterics while it is parking.',
    placeholder: CarouselPlaceholder,
  },
  {
    title: 'Mind about the parking spot',
    caption: `While checking in a car, make sure you have associated it with a spot.`,
    placeholder: CarouselPlaceholder,
  },
  {
    title: 'Are you in a busy day?',
    caption: `You can have a graphic perspective of the parking lot's load in the Spots link.`,
    placeholder: CarouselPlaceholder,
  },
];

export const HomeIndex = () => (
  <div>
    <Carousel fade>
      {CAROUSEL_ITEMS.map((item, key) => 
        <Carousel.Item key={key}>
          <img src={item.placeholder} className="d-block w-100" />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  </div>
);