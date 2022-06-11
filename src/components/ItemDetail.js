import './styles.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

function ItemDetail({ id, title, description, author, price, img, isDesktop }) {
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