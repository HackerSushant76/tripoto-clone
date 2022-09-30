import React, { useEffect, useState } from "react";
import {
  BeachGridWrapper,
  BeachWrapper,
  VlogWrapper,
} from "../../styles/beaches.styled";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import Topbeach from "./Topbeach";
const Beach = () => {

  const [beachgrid, setBeachgrid] = useState([]);
  const [vlogData, setVlogData] = useState([]);
  useEffect(() => {
    axios
      .get("https://avdhoot-fake-api.herokuapp.com/singapore")
      .then((res) => {
        setBeachgrid(res.data[0].TopBeach);
        setVlogData(res.data[0].VlogBeach);
  
      });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div  style={{fontSize:"45px",color:"rgb(56,159,221)",backgroundColor:"transparent",position:"absolute",right:"-18px",}}>
      <IoIosArrowDropright
           onClick={onClick}
        
        
       />
         </div>
     
     
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    
    return (
    <div  style={{fontSize:"45px",color:"rgb(56,159,221)",backgroundColor:"transparent" ,position:"absolute",left:"-18px",zIndex:"999"}}>
 <IoIosArrowDropleft
      onClick={onClick}
   
   
  />
    </div>
   
  
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
    <BeachWrapper>
      <h1>Beaches</h1>
      <text>
        The crunch of white sand beneath your feet and the thundering ocean
        beckoning you into its cool waters. Explore all you need to know about
        taking a trip to the beach!
      </text>
      <h1>Tripoto's Top Beach Picks for January, February, March 2022</h1>
      <BeachGridWrapper>
        {beachgrid &&
          beachgrid.map((ele) => (
            <div key={ele.id}>
              <img src={ele.image}></img>
              <h3>{ele.title}</h3>
              <h5>
                <span>By</span>
                {ele.by}
              </h5>
            </div>
          ))}
      </BeachGridWrapper>

       <Topbeach/>
      <div>
        <h1 style={{ fontFamily: "sans-serif" }}>
          Top Tripoto Vlogs for Beaches This Week
        </h1>
        <VlogWrapper>
          {vlogData &&
            vlogData.map((ele) => (
              <div key={ele.id}>
                <img src={ele.image}></img>
                <h3>{ele.title}</h3>
                <h5>
                  <span>By</span>
                  {ele.by}
                </h5>
              </div>
            ))}
        </VlogWrapper>
      </div>
    </BeachWrapper>
  );
};

export default Beach;
