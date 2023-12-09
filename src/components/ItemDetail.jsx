import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

import { Car } from "./Carousel";

export const ItemDetail = ({ item }) => {

    const { onAdd } = useContext(CartContext);

    const add = () => {
        onAdd(item)
    }

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Car item={item} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-xl text-gray-500 tracking-widest">{`${item.category} ${item.brand}`} </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-6 mt-4">{item.model}</h1>
                    <h3 className="leading-relaxed">{item.description}</h3>
                    <div className="flex gap-10 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <span className="title-font font-bold text-3xl text-green-900">{`$ ${item.price.toLocaleString()}`}</span>
                    </div>
                    <ItemCounter onAdd={add} />
                </div>
            </div>
        </div>
    );
}