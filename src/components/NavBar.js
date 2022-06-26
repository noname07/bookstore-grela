import AppBar from '@mui/material/AppBar';
import { CartContext } from './CartProvider';
import NavBarBrand from './NavbarBrand';
import NavBarCartIcon from './NavbarCartIcon';
import NavBarItem from './NavBarItem';
import Toolbar from '@mui/material/Toolbar';
import { useContext, useEffect, useState } from 'react';

function NavBar({ isDesktop }) {
    const pages = ['BestSellers', 'Coming Soon', 'New Releases'];
    const [counter, setCounter] = useState(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        const count = cartContext.countItems();

        setCounter(count);
    }, [cartContext, counter]);

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
                {counter > 0 && <NavBarCartIcon counter={counter} />}
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;