import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

interface Props {
    data: Array<any>
}

const ListItem = ({ data }: Props) => (
  <Box my="3" background="white" boxShadow="md" borderRadius="5">
    <Flex direction="row">
      {data.map((item, index) => <Item index={index}>{item}</Item>)}
    </Flex>
  </Box>
);

export default ListItem;
