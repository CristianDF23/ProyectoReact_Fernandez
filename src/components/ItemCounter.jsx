import { useState } from "react"

export const ItemCounter = ({onAdd}) => {
    const [quantity, setQuantity] = useState(1)

    const sumar = ()=>{
        setQuantity(prev => prev + 1)
    }

    const restar = ()=>{
        setQuantity(prev => prev - 1)
    }

    const changeValue = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <>
            <div className="flex items-center gap-5">
                <button onClick={restar} className="rounded-full bg-indigo-600 w-8 h-8 flex items-center justify-center"><svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                </svg></button>
                <input onChange={changeValue} value={quantity} className="w-8 text-center font-bold"/>
                <button onClick={sumar} className="rounded-full bg-indigo-600 w-8 h-8 flex items-center justify-center"><svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg></button>
                <button onClick={onAdd} className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agregar Al Carrito</button>
            </div>
        </>
    )
}