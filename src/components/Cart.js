import { Box } from '@mui/system';
import CartCounter from './CartCounter';
import { CartContext } from './CartProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from 'react';

function Cart() {
    const [counter, setCounter] = useState(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        const items = cartContext.getItems();
        const hashMap = items.map(element => element.quantity);
        const count = hashMap.reduce((prev, curr) => prev + curr, 0);

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

export default Cart;