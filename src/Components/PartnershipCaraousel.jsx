import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import axios from "axios";
import CarouselOne from "./CarouselOne";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
];

const PartnershipCaraousel = () => {
  const [p_data, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://avdhoot-fake-api.herokuapp.com/partnerships")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(p_data);

  
  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel  pagination={false} breakPoints={breakPoints}>
          {p_data.map((item) => (
            <Item key={item.id}>
              <CarouselOne
                id={item.id}
                image={item.image_top}
                para={item.title}
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PartnershipCaraousel;
