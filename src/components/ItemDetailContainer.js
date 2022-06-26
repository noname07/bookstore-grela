import ItemDetail from "./ItemDetail";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from "../devices/firebase";
import { getDoc, doc } from "firebase/firestore";

function ItemDetailContainer({ isDesktop }) {
    const [item, setItem] = useState();

    const params = useParams();

    useEffect(() => {
        const docRef = doc(db, 'products', params.itemId)

        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setItem(productFormatted)
        }).catch(error => console.log(error))
    });

    return (
        <Box sx={{ padding: isDesktop ? '4rem' : '0rem', justifyContent: isDesktop && 'center' }}>
            <ItemDetail {...item} isDesktop={isDesktop} />
        </Box >
    );
};

export default ItemDetailContainer;