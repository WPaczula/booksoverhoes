import React from 'react'
import { Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactElement,   
};

const Layout = ({ children }: Props) => (
  <Flex direction="column" align="center" maxW={{ xl: "1200px"}} m="0 auto">
    {children}
  </Flex>
)

export default Layout
