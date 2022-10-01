import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ShowContext } from "../Context/ShowContext";
import "../CSS/Homepage.css";
import Footer from "./Footer";
import Home1 from "./Home1";
import Middle6Part from "./Middle6Part";
import luftansa from "../Images/image1.png";
import { AiOutlineSearch } from "react-icons/ai";

const Homepage = () => {
  const { show, setShow } = useContext(ShowContext);

  return (
    <div>
      <Box>
        <Box position={"relative"} width="100%">
          <img
            id="banner"
            src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
            alt=""
          />
          <Box
            position={"absolute"}
            top="35%"
            width={"40%"}
            left={"30%"}
            textAlign="center"
          >
            <Heading size="lg" color="white" mb="10px">
              India's Largest Community of Travellers
            </Heading>
            {!show && (
              <Box>
                <Input
                  width="500px"
                  height="45px"
                  fontSize="12px"
                  backgroundColor={"white"}
                  placeholder="Search for itineraries, destinations, hotels or activities"
                  position="relative"
                />
                <Button position="absolute" right="8%" bg="none" _hover="none">
                  <AiOutlineSearch color="grey" />
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <br />
      <Box id="luftansa">
        <img style={{ borderRadius: "3px" }} src={luftansa} alt="" />
      </Box>
      <Home1 />
      <Middle6Part />
    </div>
  );
};

export default Homepage;
