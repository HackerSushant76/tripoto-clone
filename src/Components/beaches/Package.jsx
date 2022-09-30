import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {
  WebseriesWrapper,
  WeseriesCard,
} from "../../styles/sgtopbeaches.styled";

const Package = () => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    axios
      .get("https://avdhoot-fake-api.herokuapp.com/singapore")
      .then((res) => {
        setPackage(res.data[0].TopBeaches);
      });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          right: "-18px",
        }}
      >
        <IoIosArrowDropright onClick={onClick} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          left: "-18px",
          zIndex: "999",
        }}
      >
        <IoIosArrowDropleft onClick={onClick} />
      </div>
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <WebseriesWrapper>
      <div>
        <h1>Top Beach Properties You Need to Experience This Year</h1>
      </div>
      <Slider
        {...settings}
        style={{
          margin: "auto",
          alignItems: "center",
          width: "100%",
          display: "flex",
        }}
      >
        {packag &&
          packag.map((ele) => (
            <WeseriesCard>
              <img src={ele.image}></img>
              <h6>{ele.prop}</h6>
              <h3>{ele.title}</h3>
              <h5>
                {" "}
                <span>By</span>
                {ele.by}
              </h5>
            </WeseriesCard>
          ))}
      </Slider>
    </WebseriesWrapper>
  );
};

export default Package;
