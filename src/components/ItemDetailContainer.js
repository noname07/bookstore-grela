import ItemDetail from "./ItemDetail";
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
        <ItemDetail {...item} isDesktop={isDesktop} />
    );
};

export default ItemDetailContainer;