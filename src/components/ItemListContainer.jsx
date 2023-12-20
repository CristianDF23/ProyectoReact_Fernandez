import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { Error404 } from "../components/Error404";

import { ItemList } from "./ItemList";
import { Spinner } from "flowbite-react";

export const ItemsListContainer = (props) => {
    const [items, setItems] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "articles")
            : query(collection(db, "articles"), where("category", "==", id));

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                return <Error404 />;
            } else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, [id]);

    return (
        <main>
            <h1 className="text-center mt-4 text-3xl">
                Bienvenidos a{" "}
                <span className="font-bold text-purple-600">{props.greeting}</span>
            </h1>
            {items ? (
                <section className="flex flex-wrap container px-5 py-10 mx-auto">
                    <ItemList items={items} />
                </section>
            ) : (
                <div className="grid min-h-full place-items-center bg-white px-6 py-24 my-24 sm:py-32 lg:px-8 text-center">
                    <Spinner size="xl" aria-label="Center-aligned" color="success" />
                    <p className="font-bold text-xl">Loanding</p>
                </div>
            )}
        </main>
    );
};
