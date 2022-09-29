import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import "../CSS/Homepage.css"
import Home1 from './Home1'
import Home2 from './Home2'


const Homepage = () => {

  return (
    <div>
        <Box>
            <Box position={"realtive"} width="100%" >
                <img id='banner' src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" alt="" />
                <Heading color={"white"} fontSize={"35px"}  position={"absolute"}  top="2.7%" width={"48%"} left={"28.5%"}>India's Largest Community of Travellers</Heading>
                <Input height={"50px"} position={"absolute"} top="4%" width={"40%"} left={"30%"} backgroundColor={"white"} placeholder='Search for itineraries, destinations, hotels or activities'/>
            </Box>
        </Box>
        <br />
        <Box id="luftansa" >
           {/* LUFTANSA BANNER  */}
        </Box>
        <Home1/>
        <br />
        <br />
        <Home2/>
    </div>
  )
}

export default Homepage