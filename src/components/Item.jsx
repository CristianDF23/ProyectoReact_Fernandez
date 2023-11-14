import { Link } from "react-router-dom"
export const Items = ({ item }) => {
    return (
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-400 border-opacity-60 overflow-hidden">
                    <img className="lg:h-80 md:h-36 w-full object-cover object-center" src={`../${item.image.one}`} alt={`${item.category} ${item.brand} ${item.model}`} />
                    <div className="p-6">
                        <h2 className="tracking-widest text-lg title-font font-medium text-gray-800 mb-1">Categoria: {item.category}</h2>
                        <h1 className="title-font text-xl font-medium text-gray-800 mb-3 mt-3">Marca: {item.brand}</h1>
                        <p className="leading-relaxed mb-3 text-xl text-gray-800">Modelo: {item.model}</p>
                        <p className="leading-relaxed mb-3 font-bold text-xl text-green-600">$ {item.price.toLocaleString()}</p>
                        <div className="flex items-center flex-wrap ">
                            <Link to={`/items/${item.id}`}><button className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 text-lg hover:text-blue-900 hover:font-bold">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </button></Link>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}