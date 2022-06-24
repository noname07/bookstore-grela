import './styles.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Item({ id, title, author, price, img }) {

    return (
        <Box sx={{ width: '30%', maxWidth: 263, minWidth: 263 }}>
            <Card key={id}>
                <CardMedia
                    height={400}
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