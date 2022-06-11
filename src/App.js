import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useMediaQuery } from '@mui/material';

function App() {
  const isDesktop = useMediaQuery('(min-width: 700px)');

  return (
    <BrowserRouter>
      <NavBar isDesktop={isDesktop} />
      <Routes>
        <Route path='/' element={<ItemListContainer isDesktop={isDesktop} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer isDesktop={isDesktop} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;