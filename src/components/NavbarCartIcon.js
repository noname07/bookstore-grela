import { Box } from '@mui/system';
import CartCounter from './CartCounter';
import { CartContext } from './CartProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from 'react';

function NavBarCartIcon() {
    const [counter, setCounter] = useState(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        const count = cartContext.countItems();

        setCounter(count);
    }, [cartContext]);

    return (
        <>
            {counter > 0 && <CartCounter counter={counter} />}
            <Box ml={2}>
                <ShoppingCartIcon />
            </Box>
        </>
    );
}

export default NavBarCartIcon;