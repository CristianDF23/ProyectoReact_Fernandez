import { Navbar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { CartWidget } from './CartWidget';
import { HiHome } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { HiShoppingBag } from 'react-icons/hi2';
import logo from '../assets/logo.png';


export const NavBar = () => {
    return (
        <Navbar fluid rounded className='border-gray-100 border-b-2'>
            <Navbar.Brand>
                <img src={logo} className="brand mr-3" alt="" />
            </Navbar.Brand>
            <div className="flex md:order-2 items-center gap-4">
                <Navbar.Toggle />
                <CartWidget />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className='text-xl flex gap-4 items-center' href="#"><HiHome className='w-5 h-5'/>Inicio</Navbar.Link>
                <Navbar.Link className='text-xl flex gap-4 items-center'><HiShoppingBag className='w-5 h-5'/>
                    <Dropdown label="Productos" inline >
                        <Dropdown.Item className='text-lg'>Zapatillas</Dropdown.Item>
                        <Dropdown.Item className='text-lg'>Botines</Dropdown.Item>
                        <Dropdown.Item className='text-lg'>Indumentaria</Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>
                <Navbar.Link className='text-xl flex gap-4 items-center' href="#"><HiPhone className='w-5 h-5' />Contacto</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}




