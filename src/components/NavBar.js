import AppBar from '@mui/material/AppBar';
import NavBarBrand from './NavbarBrand';
import NavBarCartIcon from './NavbarCartIcon';
import NavBarItem from './NavBarItem';
import Toolbar from '@mui/material/Toolbar';

function NavBar({ isDesktop }) {
    const pages = ['BestSellers', 'Coming Soon', 'New Releases'];

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <NavBarBrand isDesktop={isDesktop} />
                {isDesktop &&
                    <>
                        {pages.map((page, i) => (
                            <NavBarItem name={page} key={i} />
                        ))}
                    </>
                }
                <NavBarCartIcon />
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;