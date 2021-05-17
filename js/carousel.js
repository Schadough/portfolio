import { Item } from "./item.min";

export const NTCarousel = (data, dataName) => {
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item>
          <Item
            link={item.link}
            imageSrc={item.imageSrc}
            altSrc={item.altSrc}
          />
          <Carousel.Caption>
            <h2>{dataName}</h2>
            <p>Time Spent: {item.timeSpent.toString()} years</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
