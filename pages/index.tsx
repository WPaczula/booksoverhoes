import React from 'react';
import Head from 'next/head';
import Button from 'components/button';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Button onClick={() => console.log('Hello')}>Add</Button>
  </div>
);

export default Home;
