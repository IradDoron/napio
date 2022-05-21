import abcTunes from '../../../data/abcTunes';

import Book from '../Book';
import BookTemplate from '../BookTemplate/BookTemplate';

// import material ui components
import { Stack, Typography, Button } from '@mui/material';
import { NavLink, Link, Route, Routes, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Category({ category }) {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    setBooks(Object.keys(category.books));
  }, []);

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <Typography>{category.name}</Typography>
        <Typography>{category.description}</Typography>
        <Stack direction="row" component="nav">
          {books?.map((book, index) => {
            return (
              <NavLink key={index} to={`${category.urlName}/${book}`}>
                {category.books[book].name}
              </NavLink>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}

export default Category;

/*

category is a section that contains carusel of books. 
It's basiacly a cool navigation system between the books.

*/
