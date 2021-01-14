import React from 'react';
import Head from 'next/head';
import { Button, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Flex direction="column" width="100%">
      <Flex direction="row" justifyContent="space-between" alignItems="flex-end">
        <Heading as="h1" fontSize={{ base: '2xl', md: "3xl"}}>My Books</Heading>
        <Button>Add</Button>
      </Flex>
      <Tabs mt={{ base: '2', md: '8' }}>
        <TabList overflowX="auto" overflowY="hidden">
          <Tab whiteSpace="nowrap">Done</Tab>
          <Tab whiteSpace="nowrap">Not read</Tab>
          <Tab whiteSpace="nowrap">Not reviewed</Tab>
          <Tab whiteSpace="nowrap">Not recieved</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            DONE HERE
          </TabPanel>
          <TabPanel>
            NOT READ HERE
          </TabPanel>
          <TabPanel>
            NOT RECIEVED HERE
          </TabPanel>
          <TabPanel>
            NOT REVIEWED HERE
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  </>
);

export default Home;
