import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import { ItemList } from './ItemList';

export const ItemsListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id ? collection(db, 'articles')
            : query(collection(db, 'articles'), where('category', '==', id));
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                )
        })
    }, [])

    return (
        <main>
            <h1 className="text-center mt-4 text-3xl">Bienvenidos a <span className="font-bold text-purple-600">{props.greeting}</span></h1>
            <section className="flex flex-wrap container px-5 py-10 mx-auto">
                {items ? <ItemList items={items} /> : <>Loading...</>}
            </section>
        </main>
    )
};