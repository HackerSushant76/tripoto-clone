<<<<<<< HEAD
import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
=======
import { Box, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ShowContext } from '../Context/ShowContext'
>>>>>>> 6e8a8b03a96abf58f0f10524a4820111817e6544
import "../CSS/Homepage.css"
import Footer from './Footer'
import Home1 from './Home1'
<<<<<<< HEAD
import Home2 from './Home2'

=======
import Middle6Part from './Middle6Part'
>>>>>>> 6e8a8b03a96abf58f0f10524a4820111817e6544

const Homepage = () => {
  const { show, setShow } = useContext(ShowContext);
  
  return (
    <div>
        <Box>
            <Box position={"realtive"} width="100%" >
                <img id='banner' src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" alt="" />
<<<<<<< HEAD
                <Heading color={"white"} fontSize={"35px"}  position={"absolute"}  top="2.7%" width={"48%"} left={"28.5%"}>India's Largest Community of Travellers</Heading>
                <Input height={"50px"} position={"absolute"} top="4%" width={"40%"} left={"30%"} backgroundColor={"white"} placeholder='Search for itineraries, destinations, hotels or activities'/>
=======
                {!show && <Input position={"absolute"} top="5%" width={"40%"} left={"30%"} backgroundColor={"white"} placeholder='Search for itineraries, destinations, hotels or activities'/>}
>>>>>>> 6e8a8b03a96abf58f0f10524a4820111817e6544
            </Box>
        </Box>
        <br />
        <Box id="luftansa" >
           {/* LUFTANSA BANNER  */}
        </Box>
        <Home1/>
<<<<<<< HEAD
        <br />
        <br />
        <Home2/>
=======
        <Middle6Part/>
        
        <Footer/>
>>>>>>> 6e8a8b03a96abf58f0f10524a4820111817e6544
    </div>
  )
}

export default Homepage