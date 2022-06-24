import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavBarItem({ name, index }) {
    const to = `/${name.toLowerCase().replace(' ', '-')}`

    return (
        <MenuItem key={index} component={Link} to={to} >
            <Typography textAlign="center">{name}</Typography>
        </MenuItem >
    );
}

export default NavBarItem;