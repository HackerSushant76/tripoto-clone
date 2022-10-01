import { Avatar, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Styles from "./PackageFirstSection.module.css";
import axios from "axios";

function PackageFirstSection() {
  const [data, setData] = useState([]);
  const getData = () => {
    return axios
      .get("https://avdhoot-fake-api.herokuapp.com/bookhotels")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box className={Styles.IstSection}>
      <Heading size="lg" textAlign="left">
        Tripoto's Mindful Retreats
      </Heading>
      <Box textAlign="left">
      {data.map((elem) => (
        
          <Box key={elem.id}>
            <Box>
              <Image src={elem.img} />
            </Box>
            <Text
              mt={-1}
              mb="-1"
              fontSize="13px"
              color="teal"
              fontWeight="bold"
            >
              PACKAGE
            </Text>
            <Box className={Styles.title}>
              {elem.title}
            </Box>
            <Box className={Styles.Placebox}>
              <Box>{elem.place}</Box>
              <Box>{elem.days}</Box>
            </Box>
            <Box className={Styles.Placebox}>
              <Box>{elem.cost} / person</Box>
              <Button className={Styles.BooknowButt} size="sm">
                Book Now
              </Button>
            </Box>
            <hr />
            <Box display="flex" alignItems="center" gap="8px">
              <Avatar
                src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
                size="sm"
              />
              <Box fontSize="13px">Tripoto's Mindful Retreats</Box>
            </Box>
          </Box>
        
      ))}
      </Box>
    </Box>
  );
}

export default PackageFirstSection;
