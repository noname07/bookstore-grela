import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Item({ id, title, author, price, img, isDesktop }) {

    return (
        <Box sx={{ width: isDesktop ? '30%' : '100%', maxWidth: isDesktop ? 263 : '50%', minWidth: isDesktop ? 263 : '90%' }}>
            <Card key={id}>
                <CardMedia
                    height={isDesktop ? 400 : 600}
                    component='img'
                    image={img}
                    alt={title} />
                <CardContent sx={{ padding: '2rem' }}>
                    <Typography gutterBottom variant='h6' component='div' sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                        {title}
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