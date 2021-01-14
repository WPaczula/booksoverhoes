import React from 'react';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

const BooksList = () => (
  <>
    <ListHeader />
    <ListItem data={['1', 'Harry Potter', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['2', 'Harry Potter 2', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['3', 'Harry Potter 3', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['4', 'Harry Potter 4', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['5', 'Harry Potter 5', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['6', 'Harry Potter 6', 'J. K. Rowling', 'I dont know']} />
    <ListItem data={['7', 'Harry Potter 7', 'J. K. Rowling', 'I dont know']} />
  </>
);

export default BooksList;
