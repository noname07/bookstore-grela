import { getItems, getItemsByCategory } from "./AsyncMock";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";
import { Typography } from "@mui/material";

function ItemListContainer({ isDesktop }) {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');

    const params = useParams();

    useEffect(() => {
        const hashMap = { 'bestsellers': 'BestSellers', 'coming-soon': 'Coming Soon', 'new-releases': 'New Releases' };
        const category = hashMap[params.category];

        if (category !== undefined) {
            getItemsByCategory(category)
                .then(res => {
                    setItems(res);
                });

            setTitle(category);
        }
        else {
            getItems()
                .then(res => {
                    setItems(res);
                });

            setTitle('Welcome!');
        }
    }, [params]);

    return (
        <>
            {isDesktop && <Typography display='flex' p='.8rem' justifyContent={'center'} variant='h4'>{title}</Typography>}
            <ItemList items={items} isDesktop={isDesktop} />
        </>
    );
}

export default ItemListContainer;