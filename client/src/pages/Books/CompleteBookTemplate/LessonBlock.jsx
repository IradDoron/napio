import books_data from '../../../helpers/books_data/books_data';
import RenderPage from '../RenderPage/RenderPage';

import styled from 'styled-components';

const StyledBg = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.4) 0%,
    rgba(253, 29, 29, 0.4) 50%,
    rgba(252, 176, 69, 0.4) 100%
  );
`;

function LessonBlock({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  return (
    <>
      <StyledBg>
        <RenderPage
          pageData={
            books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.lessons[Number(lessonIndex)]
              ?.lessonElements
          }
        />
      </StyledBg>
    </>
  );
}

export default LessonBlock;
