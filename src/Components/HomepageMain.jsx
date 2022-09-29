import { Box, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ShowContext } from '../Context/ShowContext'
import "../CSS/Homepage.css"
import Home1 from './Home1'

const Homepage = () => {
  const { show, setShow } = useContext(ShowContext);
  
  return (
    <div>
        <Box>
            <Box position={"realtive"} width="100%" >
                <img id='banner' src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" alt="" />
                {!show && <Input position={"absolute"} top="5%" width={"40%"} left={"30%"} backgroundColor={"white"} placeholder='Search for itineraries, destinations, hotels or activities'/>}
            </Box>
        </Box>
        <br />
        <Box id="luftansa" >
           {/* LUFTANSA BANNER  */}
        </Box>
        <Home1/>
    </div>
  )
}

export default Homepage