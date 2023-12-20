import { Navbar } from 'flowbite-react';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

import '../App.css';


export const NavBar = () => {

    return (
            <Navbar fluid rounded className='border-gray-100 border-b-2'>
                <NavLink to="/">
                    <img src={logo} className="brand mr-3" alt="" />
                </NavLink>
                <div className="flex md:order-2 items-center gap-4">
                    <Navbar.Toggle />
                    <CartWidget />
                </div>
                <Navbar.Collapse>
                    <NavLink className='text-xl items-center hover:font-bold' to="/">Inicio</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Zapatillas">Zapatillas</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Botines">Botines</NavLink>
                    <NavLink className='text-xl flex gap-4 items-center hover:font-bold' to="/category/Indumentaria">Indumentaria</NavLink>
                    <NavLink className='text-xl items-center hover:font-bold'to="/contact">Contacto</NavLink>
                </Navbar.Collapse>
            </Navbar>
    )
}




