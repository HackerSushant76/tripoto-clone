import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ImageCrouselWrapper } from '../../styles/singapore.styled';
const Imagecrousel = () => {
  const [image,setImage]=useState([])
  useEffect(()=>{
    axios.get("https://avdhoot-fake-api.herokuapp.com/singapore").then((res)=>{
       setImage(res.data[0].ImgeCrousel)
    })
  },[])

 

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    
    }
 
  return (
    <ImageCrouselWrapper>
  <Slider {...settings}>
      {
        image && image.map((ele)=><img key={ele.id} src={ele.image}></img>)
      }
      </Slider>
    </ImageCrouselWrapper>
  
  )
}

export default Imagecrousel
