import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import MenuItems from './MenuItems';

const DesktopMenu = () => { 
    const variant = useBreakpointValue({ base: 'none', md: 'flex' });
    
    return (
      <Flex flex="1" display={variant}>
        <MenuItems />
      </Flex>
  );};

export default DesktopMenu;