import './styles.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import TheTrial from '../../src/img/the-trial.jpg';
import ToKillAMockingbird from '../../src/img/to-kill-a-mockingbird.jpg';
import TheGreatGatsby from '../../src/img/the-great-gatsby.jpg';
import NineteenEightyFour from '../../src/img/1984.jpg';
import Firestarter from '../../src/img/firestarter.jpg';

function Item({ id, title, author, price, img }) {
    const hashMap = { 'ToKillAMockingbird': ToKillAMockingbird, 'TheGreatGatsby': TheGreatGatsby, 'NineteenEightyFour': NineteenEightyFour, 'Firestarter': Firestarter, 'TheTrial': TheTrial }

    return (
        <Box sx={{ width: '30%', maxWidth: 263, minWidth: 263 }}>
            <Card key={id}>
                <CardMedia
                    height={400}
                    component='img'
                    image={hashMap[img]}
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