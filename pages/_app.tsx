import React from 'react'

interface Props {
  Component: React.ElementType,
  pageProps: unknown,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: Props) => <Component {...pageProps} />

export default MyApp
