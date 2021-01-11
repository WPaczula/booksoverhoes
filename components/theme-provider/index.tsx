import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from 'styles/theme';

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
);

export default ThemeProvider;
