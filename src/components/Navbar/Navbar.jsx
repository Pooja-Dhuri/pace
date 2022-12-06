import { Avatar, Box, Button, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import style from "./Navbar.module.css"
import { BsInstagram } from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"


const Navbar = () => {
  return (
    <Box className={style.NavbarBox}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Avatar
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1yW0RrBC-TlnNKy0X8VUdjSX2nn2DoyPxA&usqp=CAU'
                  }
                />
            <Box>Learn</Box>
            <Box>Blog</Box>
            <Box>Bookmarks</Box>
          </HStack>
          <Flex alignItems={'center'}>
              <HStack>
                <Box><BsInstagram/></Box>
                <Box><AiOutlineFacebook/></Box>
                <Box><FiTwitter/></Box>
              </HStack>
          </Flex>
        </Flex>
        <hr className={style.bottomline}/>
    </Box>
    
  )
}

export default Navbar