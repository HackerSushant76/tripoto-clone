import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "../CSS/Footer.module.css"
function Footer() {
  return (
    <div>
        <br />
        <hr/>
        <Box id={style.footer} >
            <Box>1</Box>
            <Box>
              <VStack font={"left"}>
                <Box fontWeight="500" fontSize="14px">About Tripoto</Box>
                <Box fontSize="12px">How It Works</Box>
                <Box fontSize="12px">FAQ’s</Box>
                <Box fontSize="12px">Privacy Policy</Box>
                <Box fontSize="12px">Terms & Conditions</Box>
                <Box fontSize="12px">Careers</Box>
                <Box fontSize="12px">Contact Us</Box>
              </VStack> 
            </Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
        </Box>
    </div>
  )
}

export default Footer