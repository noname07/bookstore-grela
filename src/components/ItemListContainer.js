import { Typography } from '@mui/material';

function ItemListContainer(props) {
    return (
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
            {props.greetings}
        </Typography>
    );
}

export default ItemListContainer;