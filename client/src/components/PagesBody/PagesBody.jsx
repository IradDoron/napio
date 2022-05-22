import { Routes, Route } from 'react-router-dom';

// import pages
import Accompaniment from '../../pages/Accompaniment/Accompaniment';
import Theory from '../../pages/Theory/Theory';
import Technique from '../../pages/Technique/Technique';
import Harmony from '../../pages/Harmony/Harmony';
import Books from '../../pages/Books/Books';
import Composition from '../../pages/Composition/Composition';
import Games from '../../pages/Games/Games';

// import components
import BookTemplate from '../../pages/Books/BookTemplate/BookTemplate';

function PagesBody() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Accompaniment" element={<Accompaniment />} />
        <Route path="theory" element={<Theory />} />
        <Route path="technique" element={<Technique />} />
        <Route path="harmony" element={<Harmony />} />
        <Route path="books" element={<Books />}>
          <Route path=":category/:book" element={<BookTemplate />} />
        </Route>
        <Route path="composition" element={<Composition />} />
        <Route path="games" element={<Games />} />
      </Routes>
      <div style={{ marginBottom: '70px' }}></div>
    </>
  );
}

export default PagesBody;
