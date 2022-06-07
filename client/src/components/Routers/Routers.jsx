import { Routes, Route } from 'react-router-dom';

import { createContext, useState } from 'react';

// import pages
import Accompaniment from '../../pages/Accompaniment/Accompaniment';
import Improvisation from '../../pages/Improvisation/Improvisation';
import Theory from '../../pages/Theory/Theory';
import Technique from '../../pages/Technique/Technique';
import Harmony from '../../pages/Harmony/Harmony';
import Books from '../../pages/Books/Books';
import Composition from '../../pages/Composition/Composition';
import Games from '../../pages/Games/Games';
import Home from '../../pages/Home/Home';

// import components
import AccPageTemplate from '../../pages/Accompaniment/AccPageTemplate/AccPageTemplate';
import CompleteBookTemplate from '../../pages/Books/CompleteBookTemplate/CompleteBookTemplate';

// create book context
export const PagePositionContext = createContext();

function PagesBody() {
  const [pagePosition, setPagePosition] = useState({});

  return (
    <>
      <PagePositionContext.Provider value={{ pagePosition, setPagePosition }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="accompaniment" element={<Accompaniment />}>
            <Route path=":style" element={<AccPageTemplate />} />
          </Route>
          <Route path="theory" element={<Theory />} />
          <Route path="technique" element={<Technique />} />
          <Route path="harmony" element={<Harmony />} />
          <Route path="books" element={<Books />}>
            <Route path=":categoryUrl" element={<CompleteBookTemplate />} />
            <Route path=":categoryUrl/:bookUrl" element={<CompleteBookTemplate />} />
            <Route path=":categoryUrl/:bookUrl/:chapterIndex" element={<CompleteBookTemplate />} />
            <Route path=":categoryUrl/:bookUrl/:chapterIndex/:lessonIndex" element={<CompleteBookTemplate />} />
          </Route>
          <Route path="composition" element={<Composition />} />
          <Route path="improvisation" element={<Improvisation />} />
          <Route path="games" element={<Games />} />
        </Routes>
      </PagePositionContext.Provider>
    </>
  );
}

export default PagesBody;
