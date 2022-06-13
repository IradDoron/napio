import books_data from '../../../helpers/books_data/books_data';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const StyledChapterHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

function LessonHeader({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  if (lessonIndex) {
    return (
      <>
        <Typography variant="h1" sx={{ margin: 3, fontSize: 52 }}>
          פרק {Number(chapterIndex)} {' - '}
          {books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.chapterHeader}
        </Typography>
        <Typography variant="h2" sx={{ margin: 4, fontSize: 40 }}>
          שיעור {Number(lessonIndex) + 1} {' - '}
          {
            books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.lessons[Number(lessonIndex)]
              ?.lessonHeader
          }
        </Typography>
      </>
    );
  } else {
    return null;
  }
}

export default LessonHeader;
