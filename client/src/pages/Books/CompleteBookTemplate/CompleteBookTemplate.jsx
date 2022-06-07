import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { PagePositionContext } from '../../../components/Routers/Routers';

import LessonBlock from './LessonBlock';

import LessonHeader from './LessonHeader';

import BookNavigation from './BookNavigation';

function CompleteBookTemplate() {
  const params = useParams();
  const { categoryUrl, bookUrl, chapterIndex, lessonIndex } = params;
  const { pagePosition, setPagePosition } = useContext(PagePositionContext);
  useEffect(() => {
    setPagePosition({ ...pagePosition, categoryUrl, bookUrl, chapterIndex, lessonIndex });
  }, [categoryUrl, bookUrl, chapterIndex, lessonIndex]);

  return (
    <>
      <LessonHeader categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} lessonIndex={lessonIndex} />
      <BookNavigation
        categoryUrl={categoryUrl}
        bookUrl={bookUrl}
        chapterIndex={chapterIndex}
        lessonIndex={lessonIndex}
      />

      <LessonBlock categoryUrl={categoryUrl} bookUrl={bookUrl} chapterIndex={chapterIndex} lessonIndex={lessonIndex} />
      <BookNavigation
        categoryUrl={categoryUrl}
        bookUrl={bookUrl}
        chapterIndex={chapterIndex}
        lessonIndex={lessonIndex}
      />
    </>
  );
}

export default CompleteBookTemplate;
