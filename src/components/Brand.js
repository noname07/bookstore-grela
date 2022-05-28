import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

function Brand(props) {
    return (
        <>
            <Box mr={2} >
                {props.isDesktop ? <AutoStoriesIcon /> : <MenuIcon />}
            </Box>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                Bookstore
            </Typography>
        </>
    )
}

export default Brand;