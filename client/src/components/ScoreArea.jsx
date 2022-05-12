import abcjs from 'abcjs';
import { useEffect } from 'react';

function ScoreArea({ tune, id }) {
  useEffect(() => {
    abcjs.renderAbc(id, tune);
  }, [tune]);

  return (
    <>
      <div id={id}></div>
    </>
  );
}

export default ScoreArea;
