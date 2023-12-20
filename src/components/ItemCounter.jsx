import { useState } from "react"
import Swal from "sweetalert2"


export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount(prev => prev + 1)
        } else {
            Swal.fire({
                title: "Ha superado el Stock Disponible",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const changeValue = (e) => {
        setCount(e.target.value)
    }

    const handleAdd = () =>{
        onAdd(count)
        setCount(initial)
    }

    return (
        <>
            <div className="flex items-center gap-5">
                <button onClick={handleDecreaseCount} className="rounded-full bg-indigo-600 w-8 h-8 flex items-center justify-center"><svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                </svg></button>
                <input onChange={changeValue} value={count} className="w-8 text-center font-bold" />
                <button onClick={handleIncreaseCount} className="rounded-full bg-indigo-600 w-8 h-8 flex items-center justify-center"><svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg></button>
                <button onClick={handleAdd} className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agregar Al Carrito</button>
            </div>
        </>
    )
}