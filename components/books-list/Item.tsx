import React from 'react';
import { Text } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    index: number;
  };
  
  const ratio = ["1 1 5em", "5 1 5em", "5 1 5em", "3 1 2em"];

  const Item = ({ children, index }: Props) => (
    <Text px="5" py="1" textAlign="left" flex={ratio[index]}>
      {children}
    </Text>
  );

  export default Item;