import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';

import { articles } from '../data/articles.json'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
                resolve(articles);
        })
        mypromise.then((response) => {
            const findById = response.find((item) => item.id === Number(id));
            setItem(findById);
        })
    }, [id]);

    return (
        <>{item ? <ItemDetail item={item}/>: <>Loading...</>} </>
    ) 
};