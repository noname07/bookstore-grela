import { CartContext } from "./CartProvider";
import { useContext, useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CartItem from "./CartItem";
import ListItem from '@mui/material/ListItem';
import { ListItemText } from "@mui/material";

function Cart() {
    const to = '/';
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const cartContext = useContext(CartContext);

    const remove = (id) => {
        cartContext.removeItem(id);
    }

    useEffect(() => {
        const items = cartContext.getItems();
        const totalPrice = items.map((item) => parseFloat(item?.item.price) * parseFloat(item?.quantity)).reduce((partialSum, a) => partialSum + a, 0);

        setItems(items);
        setTotalPrice(totalPrice);
    }, [cartContext]);

    return (
        <>
            {items.length < 1 ?
                <>
                    <Typography display='flex' p='.8rem' justifyContent={'center'} variant='h4'>
                        Your Cart is empty
                    </Typography>
                    <Typography className='linkBrand' component={Link} to={to} display='flex' justifyContent={'center'} variant='h6'>
                        ¿Don't know what to buy? ¡Buy a book!
                    </Typography>
                </>
                :
                <Grid item xs={12} md={6}>
                    <List>
                        {items.map((item, key) => <CartItem {...item} remove={remove} key={key} />)}
                        <ListItem>
                            <ListItemText
                                primary={`Total price: US$${totalPrice}`}
                            />
                        </ListItem>
                    </List>
                </Grid >
            }
        </>
    );
};

export default Cart;