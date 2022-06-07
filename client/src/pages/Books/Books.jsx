import PageHeader from '../../components/PageHeader/PageHeader';

import { Outlet, NavLink } from 'react-router-dom';

import { useContext } from 'react';

import { PagePositionContext } from '../../components/Routers/Routers';

// import all books to get the categories
import books_data from '../../helpers/books_data/books_data';

// imports of material ui
import { Button, ButtonGroup, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

// styled components

// import building blocks components
import GenericButton from './CompleteBookTemplate/GenericButton';

// import functions
import getCategoriesNames from '../../helpers/get_data_from_books/getCategoriesNames';
import getBooksNames from '../../helpers/get_data_from_books/getBooksNames';
import getChapterNames from '../../helpers/get_data_from_books/getChapterNames';
import getLessonsNames from '../../helpers/get_data_from_books/getLessonsNames';

function Books() {
  const categories = Object.values(books_data);
  const { pagePosition, setPagePosition } = useContext(PagePositionContext);
  const { categoryUrl, bookUrl, chapterIndex, lessonIndex } = pagePosition;

  return (
    <>
      <Accordion sx={{ width: '100%', maxWidth: '700px', margin: '12px 0' }}>
        <AccordionSummary>
          <Typography>קטגוריות וספרים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>קטגוריה: {books_data[categoryUrl]?.name}</h2>
          <nav>
            <ButtonGroup variant="outlined" sx={{ textDecoration: 'none' }}>
              {getCategoriesNames().map((categoryUrlName, index) => {
                return <GenericButton key={index} content={books_data[categoryUrlName]?.name} url={categoryUrlName} />;
              })}
            </ButtonGroup>
          </nav>
          {categoryUrl ? (
            <>
              <h2>ספר: {books_data[categoryUrl]?.books[bookUrl]?.name}</h2>
              <nav>
                <ButtonGroup variant="outlined" sx={{ textDecoration: 'none' }}>
                  {getBooksNames(categoryUrl)?.map((bookUrlName, index) => {
                    return (
                      <GenericButton
                        key={index}
                        content={books_data[categoryUrl]?.books[bookUrlName].name}
                        url={`${categoryUrl}/${bookUrlName}/0/0`}
                      />
                    );
                  })}
                </ButtonGroup>
              </nav>
            </>
          ) : null}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '100%', maxWidth: '700px', margin: '12px 0' }}>
        <AccordionSummary>
          <Typography>פרקים ושיעורים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categoryUrl && bookUrl ? (
            <>
              <h2>
                פרק מספר {chapterIndex} -
                {books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.chapterHeader}
              </h2>
              <nav>
                <ul>
                  {getChapterNames(categoryUrl, bookUrl)?.map((chapterIndexName, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={`${categoryUrl}/${bookUrl}/${index}/0`}>
                          <Typography>{chapterIndexName}</Typography>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          ) : null}

          {categoryUrl && bookUrl && chapterIndex ? (
            <>
              <h2>
                שיעור מספר {Number(lessonIndex) + 1} -
                {
                  books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.lessons[lessonIndex]
                    ?.lessonHeader
                }
              </h2>
              <nav>
                <ul>
                  {getLessonsNames(categoryUrl, bookUrl, chapterIndex)?.map((lessonIndexName, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={`${categoryUrl}/${bookUrl}/${chapterIndex}/${index}`}>
                          <Typography>{lessonIndexName}</Typography>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          ) : null}
        </AccordionDetails>
      </Accordion>

      <Outlet />
    </>
  );
}

export default Books;
