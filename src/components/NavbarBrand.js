import './styles.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

function NavBarBrand({ isDesktop }) {
    const to = '/';

    return (
        <>
            <Box mr={2} className='linkBrand' component={Link} to={to} >
                {isDesktop ? <AutoStoriesIcon /> : <MenuIcon />}
            </Box>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to={to} className='linkBrand'>Bookstore</Link>
            </Typography>
        </>
    )
}

export default NavBarBrand;