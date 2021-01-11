import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {maxWidth, padding} from 'components/layout';
import MenuItem from './MenuItem';


const Header = () => (
  <Box width="100%" position="relative" px={padding}>
    <Flex maxWidth={{ xl: maxWidth }} m="0 auto" alignItems="center">
      <Box mr="24">
        <Text fontWeight="800">LOGO</Text>
      </Box>
      <Flex flex="1">
        <MenuItem href="/">Books</MenuItem>
        <MenuItem href="/publishers">Publishers</MenuItem>
      </Flex>
    </Flex>
    <Box left="0" top="0" right="0" bottom="0" boxShadow="lg" position="absolute" pointerEvents="none" />
  </Box>
);
 
export default Header;