import ItemList from "./ItemList";
import { getItems, getItemsByCategory } from "./AsyncMock";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function ItemListContainer({ isDesktop }) {
    const [items, setItems] = useState([]);

    const params = useParams();

    const hashMap = { 'best-sellers': 'BestSellers', 'coming-soon': 'Coming Soon', 'new-releases': 'New Releases' }

    useEffect(() => {
        const category = hashMap[params.category];

        if (category != undefined) {
            getItemsByCategory(category)
                .then(res => {
                    setItems(res);
                });
        }
        else {
            getItems()
                .then(res => {
                    setItems(res);
                });
        }
    });

    return (
        <ItemList items={items} isDesktop={isDesktop} />
    );
}

export default ItemListContainer;