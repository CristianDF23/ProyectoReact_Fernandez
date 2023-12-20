import { Link } from 'react-router-dom';

import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import { HiShoppingBag } from 'react-icons/hi2';
import { Badge } from 'flowbite-react';

export const CartWidget = () => {

    const {items} = useContext(CartContext)
    
    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);
    return (
        <Link to="/cart">
        <button className='flex flex-row-reverse'>
            <Badge className='justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900'>
                {total}
            </Badge>
            <HiShoppingBag className='w-7 h-7'/>
        </button>
        </Link>
    )
}