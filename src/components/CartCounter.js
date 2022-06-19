import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function CartCounter({ counter }) {
    return (
        <Box sx={{ display: 'inline-flex', heigth: 25, width: 25, justifyContent: 'center', borderRadius: '50%', backgroundColor: 'red' }}>
            <Typography>{counter}</Typography>
        </Box>
    );
}

export default CartCounter;
