import AppBar from '@mui/material/AppBar';
import Brand from './Brand';
import Cart from './Cart';
import NavBarItem from './NavBarItem';
import Toolbar from '@mui/material/Toolbar';

function NavBar({ isDesktop }) {
    const pages = ['BestSellers', 'Coming Soon', 'New Releases'];

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Brand isDesktop={isDesktop} />
                {isDesktop &&
                    <>
                        {pages.map((page, i) => (
                            <NavBarItem name={page} key={i} />
                        ))}
                    </>
                }
                <Cart />
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;