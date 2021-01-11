import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from 'components/layout'

interface Props {
  Component: React.ElementType,
  pageProps: unknown,
}

const MyApp = ({ Component, pageProps }: Props) => (
  <ChakraProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default MyApp
