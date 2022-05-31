import abcTunes from '../../../data/abcTunes';

import Book from '../Book';
import BookTemplate from '../BookTemplate/BookTemplate';

import { NavLink, Link, Route, Routes, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import mui components
import { Stack, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

// import icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Category({ category }) {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    setBooks(Object.keys(category.books));
  }, []);

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{category.name}</Typography>
          <Typography sx={{ color: '#999', marginRight: 8 }}>{category.description}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ margin: '20px 0' }}>
            <Stack direction="row" component="nav">
              {books?.map((book, index) => {
                return (
                  <NavLink key={index} to={`${category.urlName}/${book}`}>
                    <Button> {category.books[book].name}</Button>
                  </NavLink>
                );
              })}
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Category;

/*

category is a section that contains carusel of books. 
It's basiacly a cool navigation system between the books.

*/
