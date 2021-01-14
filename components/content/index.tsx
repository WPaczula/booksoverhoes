import React from 'react';
import { Flex } from "@chakra-ui/react";
import { maxWidth, padding } from 'components/layout';

interface Props {
    children: React.ReactElement,   
};

const Content = ({ children }: Props) => (
  <Flex flex="1" background="background.500" mt={{ base: '2.5rem', md: '3.75rem' }} px={padding} pt={{ base: '1', md: '8'}}>
    <Flex direction="column" align="center" maxWidth={{ xl: maxWidth}} mt="2" width="100%">
      {children}
    </Flex>
  </Flex>
);

export default Content;
