import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { articles } from '../data/articles.json'
import { ItemList } from './ItemList';

export const ItemsListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(articles);
            }, 2000);
        })
        mypromise.then((response) => {
            console.log(response);
            if (!id) {
                setItems(response)
            } else {
                const filterByCategory = response.filter((item) => item.category === id);
                setItems(filterByCategory);
                
            }
        })
    }, [id]);

    return (
        <main>
            <h1 className="text-center mt-4 text-3xl">Bienvenidos a <span className="font-bold text-purple-600">{props.greeting}</span></h1>
            <section className="flex flex-wrap container px-5 py-24 mx-auto">
            {items ? <ItemList items={items}/>: <>Loading...</>}
            </section>
        </main>
    )
};