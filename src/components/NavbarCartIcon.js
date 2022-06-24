import { Box } from '@mui/system';
import CartCounter from './CartCounter';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBarCartIcon({ counter }) {
    const to = '/cart';

    return (
        <>
            {counter > 0 &&
                <Box className='linkBrand' component={Link} to={to}>
                    <CartCounter counter={counter} />
                </Box>
            }
            <Box ml={2} className='linkBrand' component={Link} to={to}>
                <ShoppingCartIcon />
            </Box>
        </>
    );
}

export default NavBarCartIcon;