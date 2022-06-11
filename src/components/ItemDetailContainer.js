import ItemDetail from "./ItemDetail";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getItemById } from "./AsyncMock";

function ItemDetailContainer({ isDesktop }) {
    const [item, setItem] = useState();

    const params = useParams();

    useEffect(() => {
        getItemById(params.itemId)
            .then(response => {
                setItem(response);
            });
    });

    return (
        <Box sx={{ padding: isDesktop ? '4rem' : '0rem', justifyContent: isDesktop && 'center' }}>
            <ItemDetail {...item} isDesktop={isDesktop} />
        </Box >
    );
};

export default ItemDetailContainer;