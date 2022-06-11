import { Box } from "@mui/system";
import Item from "./Item";

function ItemList({ items, isDesktop }) {
    return (
        <Box m={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', flexDirection: 'row' }}>
            {items.map((item, k) => <Item key={k} {...item} isDesktop={isDesktop} />)}
        </Box>
    );
}

export default ItemList;