import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import {HamburgerIcon} from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <Box className={style.NavbarBox}>
        <Box className={style.navbarlist}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}
      >
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>Learn</Box>
          <Box>Blog</Box>
          <Box>Bookmarks</Box>
        </HStack>
        <Flex alignItems={"center"}>
          <HStack>
            <Box>
              <BsInstagram />
            </Box>
            <Box>
              <AiOutlineFacebook />
            </Box>
            <Box>
              <FiTwitter />
            </Box>
          </HStack>
        </Flex>
      </Flex>
      </Box>
      <hr className={style.bottomline} />

      <Box className={style.menulist}><Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem  command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem command="⌘N">
            New Window
          </MenuItem>
          <MenuItem command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
