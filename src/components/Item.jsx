import { Link } from "react-router-dom"
export const Items = ({ item }) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 overflow-hidden">
                <img className="lg:h-80 md:h-36 w-full object-cover object-center" src={item.imageOne} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <div className="p-4">
                    <h2 className="tracking-widest text-lg title-font mb-3 font-bold text-gray-800 mb-1">{item.category} <span className="text-indigo-600 font-bold">{item.brand}</span></h2>
                    <p className="leading-relaxed mb-3 text-lg text-indigo-600 font-bold">{item.model}</p>
                    <p className="leading-relaxed mb-3 font-bold text-xl text-green-600">$ {item.price.toLocaleString()}</p>
                    <div className="flex items-center flex-wrap ">
                    </div>
                </div>
                <Link to={`/items/${item.id}`}><button className=" border solid-2 p-2 bg-indigo-500 text-white w-full text-center  md:mb-2 lg:mb-0 text-xl hover:font-bold">Ver Producto
                        </button></Link>
            </div>
            
        </div>
    )
}