import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bookstore
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;