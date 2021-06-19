import CarouselPlaceholder from './carousel-placeholder.svg';

export type CarouselItem = {
  title: string,
  caption: string,
  placeholder: string,
};

export const CAROUSEL_ITEMS: CarouselItem[] = [
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
