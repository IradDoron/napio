// import materail ui
import { Stack, Box, Button, ButtonGroup } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import books_data from '../../../helpers/books_data/books_data';
import getLessonsNames from '../../../helpers/get_data_from_books/getLessonsNames';
import getChapterNames from '../../../helpers/get_data_from_books/getChapterNames';

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
`;

function BookNavigation({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  const navigate = useNavigate();

  function changeLesson(n) {
    if (
      Number(lessonIndex) + n >= 0 &&
      Number(lessonIndex) + n < getLessonsNames(categoryUrl, bookUrl, chapterIndex).length
    ) {
      navigate(`/books/${categoryUrl}/${bookUrl}/${chapterIndex}/${Number(lessonIndex) + n}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function changeChapter(n) {
    if (Number(chapterIndex) + n >= 0 && Number(chapterIndex) + n < getChapterNames(categoryUrl, bookUrl)?.length) {
      navigate(`/books/${categoryUrl}/${bookUrl}/${Number(chapterIndex) + n}/0`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      return null;
    }
  }

  return (
    <>
      <Stack direction="row">
        <ButtonGroup variant="outlined">
          {lessonIndex && Number(lessonIndex) === 0 ? (
            <Button disabled onClick={(n) => changeLesson(-1)}>
              שיעור קודם
            </Button>
          ) : (
            <Button onClick={(n) => changeLesson(-1)}>שיעור קודם</Button>
          )}
          {lessonIndex && Number(lessonIndex) === getLessonsNames(categoryUrl, bookUrl, chapterIndex)?.length - 1 ? (
            <Button disabled onClick={(n) => changeLesson(1)}>
              שיעור הבא
            </Button>
          ) : (
            <Button onClick={(n) => changeLesson(1)}>שיעור הבא</Button>
          )}
          {chapterIndex && Number(chapterIndex) === 0 ? (
            <Button disabled color="secondary" onClick={(n) => changeChapter(-1)}>
              פרק קודם
            </Button>
          ) : (
            <Button color="secondary" onClick={(n) => changeChapter(-1)}>
              פרק קודם
            </Button>
          )}
          {chapterIndex && Number(chapterIndex) === getChapterNames(categoryUrl, bookUrl).length - 1 ? (
            <Button disabled color="secondary" onClick={(n) => changeChapter(1)}>
              פרק הבא
            </Button>
          ) : (
            <Button color="secondary" onClick={(n) => changeChapter(1)}>
              פרק הבא
            </Button>
          )}
        </ButtonGroup>
      </Stack>
    </>
  );
}

export default BookNavigation;
