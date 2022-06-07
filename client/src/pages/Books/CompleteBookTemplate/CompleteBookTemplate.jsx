import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { PagePositionContext } from '../../../components/Routers/Routers';

import BookBlock from './BookBlock';
import ChapterBlock from './ChapterBlock';
import CategoryBlock from './CategoryBlock';
import LessonBlock from './LessonBlock';

import LessonHeader from './LessonHeader';

import StyledNavigator from './StyledNavigator';

function CompleteBookTemplate() {
  const params = useParams();
  const { categoryUrl, bookUrl, chapterIndex, lessonIndex } = params;
  const { pagePosition, setPagePosition } = useContext(PagePositionContext);
  useEffect(() => {
    setPagePosition({ ...pagePosition, categoryUrl, bookUrl, chapterIndex, lessonIndex });
  }, [categoryUrl, bookUrl, chapterIndex, lessonIndex]);

  return (
    <>
      {/* <CategoryBlock categoryUrl={category} />
      <BookBlock categoryUrl={category} bookUrl={book} /> */}
      {/* <ChapterBlock categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} /> */}
      <LessonHeader categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} lessonIndex={lessonIndex} />
      <StyledNavigator
        categoryUrl={categoryUrl}
        bookUrl={bookUrl}
        chapterIndex={chapterIndex}
        lessonIndex={lessonIndex}
      />
      <LessonBlock categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} lessonIndex={lessonIndex} />
      <StyledNavigator
        categoryUrl={categoryUrl}
        bookUrl={bookUrl}
        chapterIndex={chapterIndex}
        lessonIndex={lessonIndex}
      />
    </>
  );
}

export default CompleteBookTemplate;
