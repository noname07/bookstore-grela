import AppBar from '@mui/material/AppBar';
import Brand from './Brand';
import Cart from './Cart';
import NavBarItem from './NavBarItem';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';

function NavBar() {
    const pages = ['BestSellers', 'Coming Soon', 'New Releases'];
    const isDesktop = useMediaQuery('(min-width: 700px)');

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Brand isDesktop={isDesktop} />
                {isDesktop &&
                    <>
                        {pages.map((page) => (
                            <NavBarItem name={page} />
                        ))}
                    </>
                }
                <Cart />
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;