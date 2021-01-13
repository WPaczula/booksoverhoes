import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import MenuItems from './MenuItems';

const MobileMenu = () => {
    const variant = useBreakpointValue({ md: 'none' });
    const btnRef = React.useRef<HTMLButtonElement | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    React.useEffect(() => {
      if (variant === 'none' && isOpen) {
        onClose();
      }
    }, [variant]);
  
    return (
      <>
        <Button variant="ghost" display={variant} ref={btnRef} onClick={onOpen} ml="auto"><Image src="/hamburger.svg" width="20" height="20" /></Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader />
              <DrawerBody>
                <Flex height="100%" direction="column" justifyContent="start">
                  <MenuItems onNavigation={onClose} />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  };

  export default MobileMenu;