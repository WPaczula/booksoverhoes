import React from 'react';
import { Flex } from "@chakra-ui/react";
import Header from 'components/header';
import Content from 'components/content';

interface Props {
    children: React.ReactElement,   
};

export const maxWidth = '1200px';
export const padding = { base: '3', md: "16" };

const Layout = ({ children }: Props) => (
  <Flex direction="column" minHeight="120vh">
    <Header />
    <Content>
      {children}
    </Content>
  </Flex>
);

export default Layout;
