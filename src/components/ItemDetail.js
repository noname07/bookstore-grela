import './styles.css';
import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { CartContext } from './CartProvider';

function ItemDetail({ id, title, description, author, price, img, isDesktop }) {
    const cartContext = useContext(CartContext);

    const addToBasket = () => {
        cartContext.addItem({
            id: id,
            title: title,
            price: price,
        });

        alert('Added to the basket!')
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
                <Button p='10rem' onClick={() => addToBasket()} variant="contained">Add to basket</Button>
            </CardContent>
            <Typography pr='1rem' alignSelf='end' variant='h6'>
                US${price}
            </Typography>
        </Box >
    );

}
export default ItemDetail;