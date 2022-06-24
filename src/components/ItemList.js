import { Box } from "@mui/system";
import Item from "./Item";

function ItemList({ items }) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', flexDirection: 'row' }}>
            {items.map((item, k) => <Item key={k} {...item} />)}
        </Box>
    );
}

export default ItemList;