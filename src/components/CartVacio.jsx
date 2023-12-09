import { Link } from "react-router-dom"

export const CartVacio = () => {
    return (
        <section className="flex flex-col gap-20 m-auto">
            <h2 className="text-4xl font-bold">EL CARRITO ESTÁ VACÍO</h2>
            <h3 className="text-2xl">Tus Productos aparecerán acá.</h3>
            <Link to="/" className="border-2 border-b-red-500 border-r-red-500 text-2xl px-10 py-5 w-40 bg-black text-white">Empezar</Link>
        </section>
    )
}