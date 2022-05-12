import abcjs from 'abcjs';
import { useEffect } from 'react';

function ScoreArea({ tune, id }) {
  useEffect(() => {
    abcjs.renderAbc(id, tune);
  }, []);

  return (
    <>
      <div id={id}></div>
    </>
  );
}

export default ScoreArea;
