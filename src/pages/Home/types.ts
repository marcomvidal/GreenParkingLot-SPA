type CarouselItem = {
  title: string,
  caption: string,
  placeholder: string,
};

type CarouselWrapperProps = {
  items: CarouselItem[],
}

export type { CarouselItem, CarouselWrapperProps };
