import './styles.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Item({ id, title, author, price, img, isDesktop }) {

    return (
        <Box sx={{ width: isDesktop ? '30%' : '100%', maxWidth: isDesktop ? 263 : '50%', minWidth: isDesktop ? 263 : '100%' }}>
            <Card key={id}>
                <CardMedia
                    height={isDesktop ? 400 : 600}
                    component='img'
                    image={img}
                    alt={title} />
                <CardContent sx={{ padding: '2rem' }}>
                    <Typography gutterBottom variant='h6' component='div' sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                        <Link className='linkItem' to={`/item/${id}`}>{title}</Link>
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {author}
                    </Typography>
                    <Typography sx={{ textAlign: 'end' }} gutterBottom variant='h6' component='div'>
                        US${price}
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    );
}

export default Item;