import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Places = () => {
  return (
    <div>
        <Box>
            <Box>
                <Heading size={"md"}>Plan Your Next Trip Using Tripoto's Complete Destination Guides</Heading>
            </Box>
            <Box width={"80%"} margin={"auto"} height={"300px"} border={"1px solid"} >
      <Heading>Places Carousel</Heading>
      </Box>
      <br />
      <br />
            <Box>
                <Heading size={"md"}>Watch Tripoto's Top Travel Vlogs of the Week</Heading>
            </Box>
            <Box width={"80%"} margin={"auto"} height={"300px"} border={"1px solid"} >
      <Heading>Places-2 Carousel</Heading>
      </Box>
        </Box>
    </div>
  )
}
