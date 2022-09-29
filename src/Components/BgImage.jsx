import { Box, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "./BgImage.module.css"

function BgImage() {
    const [size,setSize] = useState(window.innerHeight)
    // console.log(size)
    // console.log(window.innerHeight)
  return (
            <Box  width="100%" position="relative">
                <img id={styles.banner} src="packagesbgimage.jpg" alt="" />
                <Input position={"absolute"} top="40%" width={"40%"} left={"28%"} backgroundColor={"white"} placeholder='Search for itineraries, destinations, hotels or activities'/>
            </Box>
  )
}

export default BgImage