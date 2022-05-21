import ScoreArea from './ScoreArea';
import abcTunes from '../../data/abcTunes';
import { objectToAbcTune } from '../../helpers/helpers';
import { Pagination } from '@mui/material';
import { useState } from 'react';

function Book({ book, category }) {
  const [currTuneNum, setCurrTuneNum] = useState(1);

  const bookTunes = abcTunes[category].books[book].tunes;

  function handleTuneChange(e, p) {
    setCurrTuneNum(p);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Pagination onChange={handleTuneChange} count={bookTunes.length} page={currTuneNum} />
        <ScoreArea id={`${book}-tune-${currTuneNum}`} tune={objectToAbcTune(bookTunes[currTuneNum - 1])} />
      </div>
    </>
  );
}

export default Book;
