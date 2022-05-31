import abcTunes from '../../data/abcTunes';
import { Pagination, PaginationItem } from '@mui/material';
import { useEffect, useState } from 'react';

import RenderPage from './RenderPage/RenderPage';

// import icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Book({ book, category }) {
  const [currPage, setCurrPage] = useState(1);

  const bookPages = abcTunes[category].books[book].pages;

  useEffect(() => {
    setCurrPage(1);
  }, [book]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currPage]);

  function handlePageChange(e, p) {
    setCurrPage(p);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: 60 }}>
        <Pagination
          onChange={handlePageChange}
          count={bookPages?.length}
          page={currPage}
          renderItem={(item) => (
            <PaginationItem components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }} {...item} />
          )}
        />
        <RenderPage pageData={bookPages[currPage - 1]} />
        <Pagination
          onChange={handlePageChange}
          count={bookPages?.length}
          page={currPage}
          renderItem={(item) => (
            <PaginationItem components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }} {...item} />
          )}
        />
      </div>
    </>
  );
}

export default Book;
