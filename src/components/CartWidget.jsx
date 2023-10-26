import { HiShoppingCart } from 'react-icons/hi2';
import { Badge } from 'flowbite-react';

export const CartWidget = () => {
    return (
        <button className='flex flex-row-reverse'>
            <Badge className='justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900'>
                2
            </Badge>
            <HiShoppingCart className='w-7 h-7 '/>
        </button>
    )
}