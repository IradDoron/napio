import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function PageWrapper({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default PageWrapper;
