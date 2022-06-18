import './styles.css';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { CartContext } from '../App';
import { Box } from '@mui/system';
import { useContext } from 'react';

function ItemDetail({ id, title, description, author, price, img, isDesktop }) {
    const cartContext = useContext(CartContext);

    return (
        <Box key={id} sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', border: '.1rem solid #e2e2e2' }}>
            <CardMedia
                height='vh'
                component='img'
                image={img}
                alt={title}>
            </CardMedia>
            <CardContent >
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {author}
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    {description}
                </Typography>

            </CardContent >
            <Typography pr='1rem' alignSelf='end' variant='h6'>
                US${price}
            </Typography>
        </Box >
    );

}
export default ItemDetail;