import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";
import { Typography } from "@mui/material";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../devices/firebase";

function ItemListContainer({ isDesktop }) {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');

    const params = useParams();

    useEffect(() => {
        const hashMap = { 'bestsellers': 'BestSellers', 'coming-soon': 'Coming Soon', 'new-releases': 'New Releases' };
        const category = hashMap[params.category];

        category !== undefined ? setTitle(category) : setTitle('Welcome!');

        const collectionRef = category ? (
            query(collection(db, 'Products'), where('category', '==', category))
        ) : (collection(db, 'Products'))

        getDocs(collectionRef).then(response => {
            const prodsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });
            setItems(prodsFormatted)
        }).catch(error => {
            console.log(error)
        })
    }, [params]);

    return (
        <>
            {isDesktop && <Typography display='flex' p='.8rem' justifyContent={'center'} variant='h4'>{title}</Typography>}
            <ItemList items={items} isDesktop={isDesktop} />
        </>
    );
}

export default ItemListContainer;