import { Flex } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const ListHeader = () => (
  <Flex direction="row">
    {['Number', 'Name', 'Author', 'Publisher']
            .map((item, index) => <Item index={index}>{item}</Item>)}
  </Flex>
);

export default ListHeader;