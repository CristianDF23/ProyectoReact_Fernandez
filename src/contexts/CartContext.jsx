import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const clear = () => setItems([]);

    const onAdd = (item) => {
        setItems((prev) => {
            return [...prev, item]
        })
    }

    const longitud = items.length

    return (
        <CartContext.Provider value={{ items, clear, onAdd, longitud }}>
            {children}
        </CartContext.Provider>
    );
};