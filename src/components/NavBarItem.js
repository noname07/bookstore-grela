import { MenuItem, Typography } from "@mui/material";

function NavBarItem({ name, index }) {
    return (
        <MenuItem key={index}>
            <Typography textAlign="center">{name}</Typography>
        </MenuItem>
    );
}

export default NavBarItem;