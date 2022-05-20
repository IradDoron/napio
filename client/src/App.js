import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagesNav from './components/PagesNav/PagesNav';

// import pages
import Lessons from './pages/Lessons/Lessons';
import Theory from './pages/Theory/Theory';
import Technique from './pages/Technique/Technique';
import Harmony from './pages/Harmony/Harmony';
import Books from './pages/Books/Books';
import Composition from './pages/Composition/Composition';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="lessons" element={<Lessons />} />
          <Route path="theory" element={<Theory />} />
          <Route path="technique" element={<Technique />} />
          <Route path="harmony" element={<Harmony />} />
          <Route path="books" element={<Books />} />
          <Route path="composition" element={<Composition />} />
        </Routes>

        <PagesNav />
      </BrowserRouter>
    </>
  );
}

export default App;
