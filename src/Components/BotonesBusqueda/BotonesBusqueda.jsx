import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

const BotonesBusqueda = () => {
    const context = useContext(ShoppingCartContext)
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className="relative inline-block text-left mr-20">
                <button onClick={toggleDropdown} className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded flex items-center">
                    <Bars3Icon className='w-6 h-6 mr-2' />
                    Filtrar
                </button>
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownVisible ? '' : 'hidden'}`}>
                    <div className="py-1">
                        <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Hombre</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Mujer</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">camisas</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">pantalones</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">chaquetas</NavLink>
                    </div>
                </div>
            </div>

            {/* Botón Despegable */}
            <div className="relative inline-block text-left mr-20">
                <input className="outline-none p-3 rounded-full shadow-lg" placeholder="busca tu producto" type="search" onChange={(e) => context.setBuscarPorTitulo(e.target.value)} />
            </div>

            <p className="text-sm text-gray-500">20</p>
        </>
    )
}

export default BotonesBusqueda
