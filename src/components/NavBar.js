import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Brand from "./Brand";

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Brand />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;