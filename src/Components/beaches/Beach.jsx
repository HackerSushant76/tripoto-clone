import React, { useEffect, useState } from 'react'
import { BeachGridWrapper, BeachWrapper,  VlogWrapper } from '../../styles/beaches.styled';
import { TopBeachesWrapper } from '../../styles/sgtopbeaches.styled';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"
const Beach = () => {
    const [topBeach,setTopBeach]=useState([])
    const [beachgrid,setBeachgrid]=useState([])
    const [vlogData,setVlogData]=useState([])
    useEffect(()=>{
        axios.get("https://avdhoot-fake-api.herokuapp.com/singapore").then((res)=>{
            setBeachgrid(res.data[0].TopBeach)
            setVlogData(res.data[0].VlogBeach)
            setTopBeach(res.data[0].TopBeaches)
        })
    },[])


    
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
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
      }
       

  return (
    <BeachWrapper>
        <h1>Beaches</h1>
        <text>The crunch of white sand beneath your feet and the thundering ocean beckoning you into its cool waters. Explore all you need to know about taking a trip to the beach!</text>
        <h2>Tripoto's Top Beach Picks for January, February, March 2022</h2>
        <BeachGridWrapper>
          {
            beachgrid && beachgrid.map((ele)=>
                <div key={ele.id}>
                    <img src={ele.image}></img>
                    <h3>{ele.title}</h3>
                    <h5><span>By</span>{ele.by}</h5>
                </div>
            )
          }
       </BeachGridWrapper> 
       
         <TopBeachesWrapper>
          <h1>Top Beach Properties You Need to Experience This Year</h1>
         <Slider {...settings}   style={{margin:"auto",alignItems:"center",width:"100%",display:"flex"}} >
            {
              topBeach && topBeach.map((ele)=><div>

                <img src={ele.image}></img>
                <h5>{ele.prop}</h5>
                <h3>{ele.title}</h3>
                <h5><span>By</span>{ele.by}</h5>
              </div>)
            }
         </Slider>
         </TopBeachesWrapper>
          <div>
            <h1 style={{fontFamily:"sans-serif"}}>Top Tripoto Vlogs for Beaches This Week</h1>
          <VlogWrapper>
          {
            vlogData && vlogData.map((ele)=>
            <div key={ele.id}>
                <img src={ele.image}></img>
                <h3>{ele.title}</h3>
                <h5><span>By</span>{ele.by}</h5>
            </div>)
          }
       </VlogWrapper>
          </div>
     
    </BeachWrapper>
  )
}

export default Beach
