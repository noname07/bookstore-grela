import './styles.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

function Brand({ isDesktop }) {
    return (
        <>
            <Box mr={2} >
                {isDesktop ? <AutoStoriesIcon /> : <MenuIcon />}
            </Box>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to='/' className='linkBrand'>Bookstore</Link>
            </Typography>
        </>
    )
}

export default Brand;