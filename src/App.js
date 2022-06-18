import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import { CartProvider } from './components/CartProvider';

function App() {
  const isDesktop = useMediaQuery('(min-width: 700px)');

  useEffect(() => {
    document.title = "Bookstore"
  });

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar isDesktop={isDesktop} />
          <Routes>
            <Route path='/' element={<ItemListContainer isDesktop={isDesktop} />} />
            <Route path='/:category' element={<ItemListContainer isDesktop={isDesktop} />} />
            <Route path='/item/:itemId' element={
              <ItemDetailContainer isDesktop={isDesktop}
              />} />
          </Routes>
        </BrowserRouter >
      </CartProvider>
    </>
  );
}

export default App;