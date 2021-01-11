import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
    children: string;
    href: string;
}

const MenuItem = ({ children, href }: Props) => { 
    const { pathname } = useRouter();

    return (
      <Link href={href}>
        <Box
          px="1"
          py="2"
          cursor="pointer"
          border="3px solid transparent"
          transition="border 0.5s ease-out"
          borderBottomColor={pathname === href ? "primary.500" : 'transparent'}
        >
          <Text
            userSelect="none"
            mx={{ base: 0, sm: 3 }}
            p="2"
            textTransform="uppercase"
            fontWeight="500"
            textAlign="center"
          >
            {children}
          </Text>
        </Box>
      </Link>
);};

export default MenuItem;
