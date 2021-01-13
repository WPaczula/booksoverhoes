import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
    children: string;
    href: string;
    onNavigation?: () => void;
}

const MenuItem = ({ children, href, onNavigation }: Props) => { 
    const { pathname } = useRouter();

    return (
      <NextLink href={href}>
        <Box
          px={{ md: "1" }}
          py={{ md: "2" }}
          onClick={onNavigation}
          cursor="pointer"
          border="3px solid transparent"
          transition="border 0.5s ease-out"
          borderBottomColor={{ md: pathname === href ? "primary.500" : 'transparent' }}
          background={{ base: pathname === href ? 'gray.200' : 'transparent', md: 'transparent' }}
        >
          <Text
            userSelect="none"
            mx="3"
            p="2"
            textTransform="uppercase"
            fontWeight="500"
            textAlign="center"
          >
            <Link href={href} _hover={{ textDecoration: 'none' }}>
              {children}
            </Link>   
          </Text>
        </Box>
      </NextLink>
);};

export default MenuItem;
