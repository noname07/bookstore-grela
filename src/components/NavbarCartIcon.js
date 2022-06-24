import { Box } from '@mui/system';
import CartCounter from './CartCounter';
import { CartContext } from './CartProvider';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from 'react';

function NavBarCartIcon() {
    const to = '/cart';
    const [counter, setCounter] = useState(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        const count = cartContext.countItems();

        setCounter(count);
    }, [cartContext]);



    return (
        <>
            {counter > 0 &&
                <Box className='linkBrand' component={Link} to={to}>
                    <CartCounter counter={counter} />
                </Box>
            }
            <Box ml={2} className='linkBrand' component={Link} to={to}>
                <ShoppingCartIcon />
            </Box>
        </>
    );
}

export default NavBarCartIcon;