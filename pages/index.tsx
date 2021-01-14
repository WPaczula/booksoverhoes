import React from 'react';
import Head from 'next/head';
import { Button, Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  index: number;
};

const ratio = ["1 1 5em", "5 1 5em", "5 1 5em", "3 1 2em"];
const Item = ({ children, index }: Props) => <Text px="5" py="1" textAlign="left" flex={ratio[index]}>{children}</Text>;

const ListHeader = () => <Flex direction="row">{['Number', 'Name', 'Author', 'Publisher'].map((item, index) => <Item index={index}>{item}</Item>)}</Flex>;

interface ListItemProps {
  data: Array<any>;
}
const ListItem = ({ data }: ListItemProps) => <Box my="3" background="white" boxShadow="md" borderRadius="5"><Flex direction="row">{data.map((item, index) => <Item index={index}>{item}</Item>)}</Flex></Box>;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Flex direction="column" width="100%">
      <Flex direction="row" justifyContent="space-between" alignItems="flex-end">
        <Heading as="h1" fontSize={{ base: '2xl', md: "3xl"}}>
          My Books
        </Heading>
        <Button> 
          <Image src="/plus.svg" width="15" height="15" />
          <Text ml="2">Add</Text>
        </Button>
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
            <ListHeader />
            <ListItem data={['1', 'Harry Potter', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['2', 'Harry Potter 2', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['3', 'Harry Potter 3', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['4', 'Harry Potter 4', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['5', 'Harry Potter 5', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['6', 'Harry Potter 6', 'J. K. Rowling', 'I dont know']} />
            <ListItem data={['7', 'Harry Potter 7', 'J. K. Rowling', 'I dont know']} />
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
