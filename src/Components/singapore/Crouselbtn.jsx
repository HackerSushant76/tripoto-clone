import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ButtonSpecialImage, CrouselButtonWrapper } from '../../styles/sgcrouselbutton.styled';
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"

const Crouselbtn = () => {

  
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
         
        <IoIosArrowDropright
          onClick={onClick}
        style={{fontSize:"35px",color:"rgb(56,159,221)",backgroundColor:"transparent",position:"relative",right:"-15px"}}
       
      />
         
         
        );
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        
        return (
        
        <IoIosArrowDropleft
          onClick={onClick}
        style={{fontSize:"35px",color:"rgb(56,159,221)",backgroundColor:"transparent",position:"relative",left:"-15px" }}
       
      />
      
        );
      }
        
  
       let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
       
        }
         
        

 
  return (
     <CrouselButtonWrapper>
        <h1>Reimagine Singapore With Tripoto</h1>
        
        <Slider {...settings}   style={{margin:"auto",alignItems:"center",border:'1px solid green',width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}} >
          
            <div>
              <ButtonSpecialImage src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663919630_flipbook_button.jpg">

              </ButtonSpecialImage>
            </div>
            <div>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704984_shop.jpg"></img>
            </div>
            <div>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643966989_sg_web_series_button.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704774_events.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705006_whats_new_in_sg.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643967015_sg_for_foodies.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704928_singapore_street_art.jpg"></img>
            </div>
            <div>
             <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705019_videos.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704729_articles.jpg"></img>
            </div>
           
        </Slider>
        
        </CrouselButtonWrapper>
   
   
  )
}

export default Crouselbtn;
