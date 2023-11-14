import { Navbar } from 'flowbite-react';
import { CartWidget } from './CartWidget';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

import '../App.css';

export const NavBar = () => {

    return (
        <header>
            <Navbar fluid rounded className='border-gray-100 border-b-2'>
                <NavLink to="/"><Navbar.Brand>
                    <img src={logo} className="brand mr-3" alt="" />
                </Navbar.Brand></NavLink>
                <div className="flex md:order-2 items-center gap-4">
                    <Navbar.Toggle />
                    <CartWidget />
                </div>
                <Navbar.Collapse>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/">Inicio</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Zapatillas">Zapatillas</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Botines">Botines</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Indumentaria">Indumentaria</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' href="#">Contacto</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}




