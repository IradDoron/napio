import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import PagesNav from './components/PagesNav/PagesNav';
import Routers from './components/Routers/Routers';
import PageWrapper from './components/PageWrapper/PageWrapper';

function App() {
  return (
    <>
      <BrowserRouter>
        <PagesNav />
        <PageWrapper >
          <Routers />
        </PageWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
