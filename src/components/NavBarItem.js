import { MenuItem, Typography } from "@mui/material";

function NavBarItem(props) {
    return (
        <MenuItem key={props.name}>
            <Typography textAlign="center">{props.name}</Typography>
        </MenuItem>
    );
}

export default NavBarItem;