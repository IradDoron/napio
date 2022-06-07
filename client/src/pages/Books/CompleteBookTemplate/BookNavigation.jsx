import ChapterNavigator from './ChapterNavigator';
import StyledNavigator from './StyledNavigator';

// import materail ui
import { Stack, Box } from '@mui/material';

function BookNavigation({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  return (
    <>
      <Stack direction="row">
        <StyledNavigator
          categoryUrl={categoryUrl}
          bookUrl={bookUrl}
          chapterIndex={chapterIndex}
          lessonIndex={lessonIndex}
        />
        <ChapterNavigator categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} />
      </Stack>
    </>
  );
}

export default BookNavigation;
