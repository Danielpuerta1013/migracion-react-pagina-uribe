import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

const BotonesBusqueda = () => {
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
                <div  className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownVisible ? '' : 'hidden'}`}>
                    <div className="py-1">
                        <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hombre</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mujer</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">camisas</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">pantalones</NavLink>
                        <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">chaquetas</NavLink>
                    </div>
                </div>
            </div>

            {/* Botón Despegable */}
            <div className="relative inline-block text-left mr-20">
                <button type="button" className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
                    Lo mas nuevo
                </button>
            </div>

            <p className="text-sm text-gray-500">20 productos disponibles</p>
        </>
    )
}

export default BotonesBusqueda
