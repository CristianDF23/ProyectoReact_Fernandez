import { Form } from "./Form";
import { CartVacio } from "./CartVacio";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { items, clear, onRemove, total } = useContext(CartContext);

    const iva = 1.21;

    if (items.length === 0) {
        return (
            <section className="container mx-auto mt-8 px-auto flex gap-6 h-screen w-full rounded-lg border">
                <CartVacio />
            </section>
        );
    } else {
        return (
            <section className="container mx-auto mt-8 px-auto flex gap-6 h-screen rounded-lg border">
                <div className="w-full h-full py-10 px-7 overflow-y-auto">
                    <Form items={items} />
                </div>
                <div className="w-full h-full bg-indigo-900 rounded-r-lg overflow-auto py-10 px-7">
                    <button
                        onClick={clear}
                        className="mb-7 font-bold text-white border p-1 translate-x-1.5 hover:bg-cyan-500"
                    >
                        Vaciar Carrito
                    </button>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between gap-2 py-3 border-b w-full mb-6"
                        >
                            <div className="flex">
                                <img className="w-24 rounded-lg" src={item.imageOne} alt="" />
                                <div className="py-2 px-2 flex flex-col gap-1">
                                    <h2 className="text-white font-bold">{item.model}</h2>
                                    <h3 className="text-indigo-400 font-bold">
                                        Cantidad: {item.quantity}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <h4 className="text-white font-bold">
                                    $ {item.price.toLocaleString()}
                                </h4>
                                <button onClick={() => onRemove(item.id)} className="ml-10">
                                    <svg
                                        className="w-5 h-5 text-white dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3 mb-4">
                        <div className="flex justify-between">
                            <h2 className="text-indigo-400 font-bold">Subtotal</h2>
                            <h3 className="text-indigo-400 font-bold">
                                $ {total.toLocaleString()}
                            </h3>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-indigo-400 font-bold">Impuesto (I.V.A)</h2>
                            <h3 className="text-indigo-400 font-bold">21%</h3>
                        </div>
                        <hr />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-indigo-400 font-bold">Total</h2>
                        <h3 className="text-indigo-400 font-bold">
                            $ {Math.round(total * iva).toLocaleString()}
                        </h3>
                    </div>
                </div>
            </section>
        );
    }
};
