import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { useMediaQuery } from '@mui/material';

function App() {
  const isDesktop = useMediaQuery('(min-width: 700px)');

  return (
    <>
      <NavBar isDesktop={isDesktop} />
      <ItemListContainer isDesktop={isDesktop} />
    </>
  );
}

export default App;