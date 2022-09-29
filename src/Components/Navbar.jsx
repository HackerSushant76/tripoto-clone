import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Signin from "./Signin";

export function Navbar() {
  return (
    <Box id={styles.navbar}>
      <Box>
        <NavLink to="/">Home</NavLink>
      </Box>
      <Box>
        {/* <NavLink to="/inspirations"> */}
          <Menu>
            <MenuButton as={Box} >
              Inspiration
            </MenuButton>
            <MenuList color="black"  width="30px" fontSize="14px" >
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
        <Signin/>
      </Box>
    </Box>
  );
}
