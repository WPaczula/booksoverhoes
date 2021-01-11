import React from 'react';
import { Flex } from "@chakra-ui/react";
import Header from 'components/header';
import Content from 'components/content';

interface Props {
    children: React.ReactElement,   
};

export const maxWidth = '1200px';
export const padding = "8";

const Layout = ({ children }: Props) => (
  <Flex direction="column" minHeight="100vh">
    <Header />
    <Content>
      {children}
    </Content>
  </Flex>
);

export default Layout;
