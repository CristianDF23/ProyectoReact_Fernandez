export const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ filter: 'grayscale(.7) contrast(1) opacity(.6)' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7401.417956128247!2d-60.52752747797599!3d-31.72777498114844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4527c394b59c7%3A0x6149e8c185693789!2s25%20de%20Junio%20139%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1701661413485!5m2!1ses-419!2sar"
                ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-indigo-700 text-2xl mb-4 font-bold title-font">
                        Contacto
                    </h2>
                    <p className="leading-relaxed text-lg font-bold mb-2 text-gray-600">
                        Telefono: 
                        <span className="font-bold text-indigo-500"> 3775-464377</span>
                    </p>
                    <p className="leading-relaxed mb-8 text-gray-600 text-lg font-bold">
                        Correo: <span className="font-bold text-indigo-500"> cristian.eam85@gmail.com</span>
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 font-bold text-sm text-gray-600">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 font-bold text-sm text-gray-600">
                            Mensaje
                        </label>
                        <textarea id="message" name="message" className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-600 hover:font-bold text-lg">
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}