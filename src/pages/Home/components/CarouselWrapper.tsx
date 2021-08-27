import { Carousel } from 'react-bootstrap';
import { CarouselWrapperProps } from '../types';

const CarouselWrapper = ({ items }: CarouselWrapperProps) => (
  <Carousel data-testid='carousel' fade={false} slide={false}>
    {items.map((item, key) => (
      <Carousel.Item key={key}>
        <img src={item.placeholder} className='d-block w-100' alt='Car parking' />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselWrapper;
