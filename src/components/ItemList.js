import { Box } from "@mui/system";
import Item from "./Item";
import { getProducts } from "./AsyncMock";
import { useEffect, useState } from "react";

function ItemList({ isDesktop }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts().then(res => {
            setItems(res);
        });
    }, []);

    return (
        <Box m={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', flexDirection: isDesktop ? 'row' : 'column' }}>
            {items.map((i, k) => <Item key={k} id={k} title={i.title} author={i.author} price={i.price} img={i.img} isDesktop={isDesktop} />)}
        </Box>
    );
}

export default ItemList;