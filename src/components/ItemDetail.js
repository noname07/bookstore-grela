import './styles.css';
import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartProvider';
import { Link } from 'react-router-dom';

function ItemDetail({ id, title, description, author, price, img, isDesktop }) {
    const [isInCart, setIsInCart] = useState(false);
    const [canFinish, setCanFinish] = useState(false);
    const cartContext = useContext(CartContext);


    useEffect(() => {
        const is = cartContext.isInCart(id);
        const can = cartContext.countItems() > 0;

        setIsInCart(is);
        setCanFinish(can);
    }, [cartContext, id])

    const add = () => {
        cartContext.addItem({
            id: id,
            title: title,
            price: price,
        });

        alert('Added to the basket!')
    }

    const remove = () => {
        cartContext.removeItem(id);

        alert('One item has been removed from the cart')
    }

    return (
        <Box key={id} sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', border: '.1rem solid #e2e2e2' }}>
            <CardMedia
                height='vh'
                component='img'
                image={img}
                alt={title}>
            </CardMedia>
            <CardContent>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {author}
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginTop: '2rem', alignSelf: 'end', justifyContent: 'end' }} >
                    <Button onClick={() => add()} variant="contained">{isInCart ? 'Add anoter one!' : 'Add to cart'}</Button>
                    {isInCart && <Button onClick={() => remove()} variant="contained">Remove</Button>}
                    {canFinish && <Button component={Link} to={'/cart'} variant="contained">Finish</Button>}
                </Box>
            </CardContent >
            <Typography pr='1rem' alignSelf='end' variant='h6'>
                US${price}
            </Typography>
        </Box >
    );

}
export default ItemDetail;