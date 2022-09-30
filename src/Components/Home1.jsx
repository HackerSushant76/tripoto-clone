import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "./Carousel";
import Home2 from "./Home2";
import { Tourism } from "./Tourism";
import TypeOfTraveller from "./TypeOfTraveller";

const Home_1 = () => {
  return (
    <div>
      <Box id="home1_A">
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
            alt=""
          />
        </Box>
      </Box>
      {/* partnership caraousel  */}
      <br />
      <br />
      <Box width={"80%"} margin={"auto"} height={"300px"} border={"1px solid"} >
      <Heading>First Carousel</Heading>
      </Box>
      <br />
      <br />

      {/* Second Carousel */}
      
      <Box width={"80%"} margin={"auto"} height={"300px"} border={"1px solid"} >
      <Heading>Second Carousel</Heading>
      </Box>
      <br />
      <br />

      {/* TOURISM */}

      <Tourism/>
      <br />
      <br />

       {/* Third Carousel*/}
       <Heading size={"l"}>Plan You Next International Trip During October & November</Heading>
       <br />
       <Box width={"80%"} margin={"auto"} height={"300px"} border={"1px solid"} >
      <Heading size={"l"}>Third Carousel</Heading></Box>
      <br />
      <br />
      <Heading size={"l"}>Check Out Best Hotels and Properties for Every Type of Traveller</Heading>
      <br />
      <TypeOfTraveller/>
      <Home2/>
    </div>
  );
};

export default Home_1;
