import React from 'react';
import {Button as ChakraButton} from '@chakra-ui/react';

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: Props) => (
  <ChakraButton colorScheme="primary" onClick={onClick}>
    {children}
  </ChakraButton>
);

export default Button;
