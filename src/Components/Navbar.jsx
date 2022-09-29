import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
import styles from "./Navbar.module.css";
import Signin from "./Signin";


export function Navbar() {
  const [color, setColor] = useState(false);
  const {show,setShow} = useContext(ShowContext)
  const changeColor = () => {
    if (window.scrollY > 120) {
      setColor(true);
      setShow(true)
    } else {
      setColor(false);
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  console.log(show);
  return (
    <Box
      id={styles.navbar}
      style={show ? { backgroundColor: "#2f9bdb" , transition:"all 0.5s ease-out"} : {backgroundColor: "transparent" , transition:"all 0.5s ease-out"}}
    >
      <Box>
        <NavLink to="/">Home</NavLink>
      </Box>
      <Box>
        {/* <NavLink to="/inspirations"> */}
        <Menu>
          <MenuButton as={Box}>Inspiration</MenuButton>
          <MenuList color="black" width="30px" fontSize="14px">
            <MenuItem>Visit Singapore</MenuItem>
            <MenuItem>Beaches</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        {/* </NavLink> */}
        <NavLink to="/forum">Forum</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/publish">Publish trip</NavLink>
        <Signin />
      </Box>
    </Box>
  );
}
