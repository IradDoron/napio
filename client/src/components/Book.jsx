import ScoreArea from './ScoreArea';
import abcTunes from '../data/abcTunes';
import { objectToAbcTune } from '../helpers/helpers';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

function Book({ book }) {
  const [currTuneNum, setCurrTuneNum] = useState(1);
  const bookTunes = abcTunes[book];

  function handleTuneChange(e, p) {
    console.log(p);
    setCurrTuneNum(p);
  }

  useEffect(() => {
    const test = objectToAbcTune(bookTunes[currTuneNum - 1]);
    console.log(test);
  }, [currTuneNum]);

  return (
    <>
      <Pagination onChange={handleTuneChange} count={bookTunes.length} page={currTuneNum} />
      <ScoreArea id={`${book}-tune-${currTuneNum}`} tune={objectToAbcTune(bookTunes[currTuneNum - 1])} />
    </>
  );
}

export default Book;
