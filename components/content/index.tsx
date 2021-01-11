import React from 'react';
import { Flex } from "@chakra-ui/react";
import { maxWidth, padding } from 'components/layout';

interface Props {
    children: React.ReactElement,   
};

const Content = ({ children }: Props) => (
  <Flex flex="1" background="background.500" px={padding}>
    <Flex direction="column" align="center" maxWidth={{ xl: maxWidth}} mx="auto" mt="2">
      {children}
    </Flex>
  </Flex>
);

export default Content;
