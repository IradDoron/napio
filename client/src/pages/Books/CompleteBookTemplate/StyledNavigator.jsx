import { useNavigate } from 'react-router-dom';
import books_data from '../../../helpers/books_data/books_data';
import getLessonsNames from '../../../helpers/get_data_from_books/getLessonsNames';

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
`;

function StyledNavigator({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  const navigate = useNavigate();
  function changeLesson(n) {
    if (
      Number(lessonIndex) + n >= 0 &&
      Number(lessonIndex) + n < getLessonsNames(categoryUrl, bookUrl, chapterIndex).length
    ) {
      navigate(`/books/${categoryUrl}/${bookUrl}/${chapterIndex}/${Number(lessonIndex) + n}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log();
  }
  return (
    <>
      <div>
        <StyledButton onClick={(n) => changeLesson(-1)}>שיעור קודם</StyledButton>
        <StyledButton onClick={(n) => changeLesson(1)}>שיעור הבא</StyledButton>
      </div>
    </>
  );
}

export default StyledNavigator;
