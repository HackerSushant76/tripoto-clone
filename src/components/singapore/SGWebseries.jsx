import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { WebseriesWrapper, WeseriesCard } from "../../styles/sgwebseries";
const SGWebseries = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <WebseriesWrapper>
      <div>
        <h2>Shop, Book and Bring Home A Part of Singapore</h2>
        <text>
          Everything that comes with the Singapore tag is made with passion. New
          collaborations with Airbnb and Krisshop in India are testament to
          that. Bring the luxurious Singapore shopping experience at home by
          browsing through clothing, food and home decor products. Click on what
          you like and start shopping!
        </text>
      </div>
      <Slider {...settings}>
        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354405_container_5_1.jpg"></img>
          <h3>A Sneak-Peek:Chhota Bheem In Singapore</h3>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354418_container_5_2.jpg"></img>
          <h3>Episode 1-The Journey Begins</h3>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354434_container_5_3.jpg"></img>
          <h3>Episode 2-Fun In The Garden City</h3>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354446_container_5_4.jpg"></img>
          <h3>Episode 3-Happy Times For Foodies</h3>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354455_container_5_5.jpg"></img>
          <h3>Episode 4-Chase The Action</h3>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354465_container_5_6.jpg"></img>
          <h3>Episode 5-Wonders Of Flora & Fauna</h3>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354465_container_5_6.jpg"></img>
          <h3>Episode 5-Wonders Of Flora & Fauna</h3>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354476_container_5_7.jpg"></img>
          <h3>Episode 6-Surprise Birthday For Bheem</h3>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643354485_container_5_8.jpg"></img>
          <h3>Episode 7-Immersing In Art & Cultures</h3>
        </WeseriesCard>
        <WeseriesCard>
          <img src=""></img>
          <h3></h3>
        </WeseriesCard>
      </Slider>
    </WebseriesWrapper>
  );
};

export default SGWebseries;
