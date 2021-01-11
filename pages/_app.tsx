import React from 'react';
import Layout from 'components/layout';
import ThemeProvider from 'components/theme-provider';

interface Props {
  Component: React.ElementType,
  pageProps: unknown,
}

const MyApp = ({ Component, pageProps }: Props) => (
  <ThemeProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
