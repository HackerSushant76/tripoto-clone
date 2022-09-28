import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function Tourism() {
  return (
    <div>
        <Box id='tourism'>
            <img  src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1664274138_2_3_1.jpg" alt="" />
            <br />
            <p>We love travelling because our planet is vivid, variegated and beautiful. The theme of World Tourism Day this year is Rethinking Tourism. We must step up now to bring about impactful and sustainable change. </p>
        </Box>
        <br />
        <Box id="tourism_B">
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg" alt="" />
                <br />
                <Heading size={"sm"}>9 Traditional Sustainable Practices In India That We Must Revive to Save the Planet</Heading>
            </Box>
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274477_green_escape.jpeg" alt="" />
                <br />
                <Heading size={"sm"}>Watch Green Escapes: An Unparalleled Road Trip Across India Done Responsibly</Heading >
            </Box>
        </Box>

    </div>
  )
}

export default Tourism