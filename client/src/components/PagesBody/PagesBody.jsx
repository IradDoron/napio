import { Routes, Route } from 'react-router-dom';

// import pages
import Lessons from '../../pages/Lessons/Lessons';
import Theory from '../../pages/Theory/Theory';
import Technique from '../../pages/Technique/Technique';
import Harmony from '../../pages/Harmony/Harmony';
import Books from '../../pages/Books/Books';
import Composition from '../../pages/Composition/Composition';

// import components
import BookTemplate from '../../pages/Books/BookTemplate/BookTemplate';

function PagesBody() {
  return (
    <>
      <Routes>
        <Route path="lessons" element={<Lessons />} />
        <Route path="theory" element={<Theory />} />
        <Route path="technique" element={<Technique />} />
        <Route path="harmony" element={<Harmony />} />
        <Route path="books" element={<Books />}>
          <Route path=":category/:book" element={<BookTemplate />} />
        </Route>
        <Route path="composition" element={<Composition />} />
      </Routes>
      <div style={{ marginBottom: '70px' }}></div>
    </>
  );
}

export default PagesBody;
