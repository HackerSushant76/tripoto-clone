import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <Box id={styles.navbar}>
      <Box>
        <NavLink to="/">Home</NavLink>
      </Box>
      <Box>
        <NavLink to="/inspirations">
          <Menu>
            <MenuButton as={Button}>
              Inspiration
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        <NavLink to="/forum">Forum</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/publish">Publish trip</NavLink>
        <NavLink to="/signin">Signin</NavLink>
      </Box>
    </Box>
  );
}
