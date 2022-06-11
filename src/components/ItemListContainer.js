import ItemList from "./ItemList";
import { getItems } from "./AsyncMock";
import { useEffect, useState } from "react";

function ItemListContainer({ isDesktop }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then(res => {
                setItems(res);
            });
    });


    return (
        <ItemList items={items} isDesktop={isDesktop} />
    );
}

export default ItemListContainer;