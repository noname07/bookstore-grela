import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


function CartItem({ item, quantity, remove, key }) {
    const { id, title, price } = item;

    return (
        <ListItem key={key}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => { remove(id); }}>
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemAvatar>
                <Avatar>
                    <AutoStoriesIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={`Quantity: ${quantity}`}
            />
            <ListItemText
                primary={`US$${price}`}
            />
        </ListItem>
    );
};

export default CartItem;