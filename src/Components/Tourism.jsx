import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Tourism = () => {
  return (
    <div>
        <Box width={"80%"} margin={"auto"}>
            <img style={{"borderRadius":"10px"}} src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1664274138_2_3_1.jpg" alt="" />
            <br />
            <p>We love travelling because our planet is vivid, variegated and beautiful. The theme of World Tourism Day this year is Rethinking Tourism. We must step up now to bring about impactful and sustainable change</p>
        </Box>
        <br />
        <br />
        <Box id="tour-flex">
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg" alt="" />
                <br />
                <Heading as={"h4"} size={"md"} >9 Traditional Sustainable Pratcies in India That We must revieve to Save the Planet</Heading>
            </Box>
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg" alt="" />
                <br />
                <Heading as={"h4"} size={"md"} >Watch Green Escapes: An Unparrelled Road trip Across India Done Responsibly</Heading>
            </Box>
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366418_north.jpg" alt="" />
                <br />
                <Heading as={"h4"} size={"md"} >Watch: Reaviving Kath Kuni Architechture with NORTH</Heading>
            </Box>
            <Box>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366571_tent_1.jpg" alt="" />
                <br />
                <Heading as={"h4"} size={"md"} >Watch: Working with Locals At Nayalap</Heading>
            </Box>
        </Box>
        
    </div>
  )
}
