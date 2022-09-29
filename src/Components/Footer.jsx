import { Box } from '@chakra-ui/react'
import React from 'react'
import style from "../CSS/Footer.module.css"
function Footer() {
  return (
    <div>
        <br />
        <hr/>
        <Box id={style.footer} >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
        </Box>
    </div>
  )
}

export default Footer