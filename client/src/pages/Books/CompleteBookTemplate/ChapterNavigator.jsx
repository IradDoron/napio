import { useNavigate } from 'react-router-dom';
import getChapterNames from '../../../helpers/get_data_from_books/getChapterNames';

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
`;

function ChapterNavigator({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  const navigate = useNavigate();
  function changeChapter(n) {
    if (Number(chapterIndex) + n >= 0 && Number(chapterIndex) + n < getChapterNames(categoryUrl, bookUrl).length) {
      navigate(`/books/${categoryUrl}/${bookUrl}/${Number(chapterIndex) + n}/0`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log();
  }
  return (
    <>
      <div>
        <StyledButton onClick={(n) => changeChapter(-1)}>פרק קודם</StyledButton>
        <StyledButton onClick={(n) => changeChapter(1)}>פרק הבא</StyledButton>
      </div>
    </>
  );
}

export default ChapterNavigator;
