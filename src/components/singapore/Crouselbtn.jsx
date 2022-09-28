import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CrouselButton, CrouselButtonImage} from "../../styles/singapore.styled"


const Crouselbtn = () => {

  
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
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
       
        }
         
        

 
  return (
   
     <div>
        <h1>Reimagine Singapore With Tripoto</h1>
        
        <Slider {...settings}   style={{border:"1px solid red",margin:"auto",alignItems:"center"}} >
          
            <div>
              <CrouselButtonImage src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663919630_flipbook_button.jpg"></CrouselButtonImage>
            </div>
            <div>
                <CrouselButton>SHOP</CrouselButton>
            </div>
            <div>
                <CrouselButton>SGWEBSERIES</CrouselButton>
            </div>
            <div>
                <CrouselButton>EVENTS</CrouselButton>
            </div>
            <div>
                <CrouselButton>WHAT'S NEW IN SG</CrouselButton>
            </div>
            <div>
                <CrouselButton>SG FOR FOODIES</CrouselButton>
            </div>
            <div>
                <CrouselButton>SINGAPORE STREET ART</CrouselButton>
            </div>
            <div>
                <CrouselButton>VIDEOS</CrouselButton>
            </div>
            <div>
                <CrouselButton>ARTICLES</CrouselButton>
            </div>
           
        </Slider>
        
      </div>
   
   
  )
}

export default Crouselbtn;
