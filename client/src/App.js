import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import PagesNav from './components/PagesNav/PagesNav';
import PagesBody from './components/PagesBody/PagesBody';

function App() {
  return (
    <>
      <BrowserRouter>
        <PagesNav />

        <PagesBody />
      </BrowserRouter>
    </>
  );
}

export default App;
