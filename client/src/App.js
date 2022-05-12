import ScoreArea from './components/ScoreArea';
import abcTunes from './data/abcTunes';
import { objectToAbcTune } from './helpers/helpers';

function Book({ book }) {
  return (
    <>
      {abcTunes[book].map((value, index) => {
        return <ScoreArea key={index} id={`${book}-tune-${index + 1}`} tune={objectToAbcTune(abcTunes[book][index])} />;
      })}
    </>
  );
}

function App() {
  return (
    <>
      <Book book="little-exercises-book-01" />
      <Book book="repeated-note-book-01" />
    </>
  );
}

export default App;
