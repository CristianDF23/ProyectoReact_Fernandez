import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { getFirestore, getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, 'articles', id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        })
    }, [id])

    return (
        <>{item ? <ItemDetail item={item} /> : <>Loading...</>} </>
    )
};