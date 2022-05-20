import abcjs from 'abcjs';
import { useEffect } from 'react';
import styled from 'styled-components';

const visualOptions = { responsive: 'resize' };

const Container = styled.div`
  max-width: 70% !important;
`;

function ScoreArea({ tune, id }) {
  useEffect(() => {
    abcjs.renderAbc(id, tune, visualOptions);
  }, [tune]);

  return (
    <>
      <Container id={id}></Container>
    </>
  );
}

export default ScoreArea;
