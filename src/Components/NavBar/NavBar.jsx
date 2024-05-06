import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { useState } from 'react';
import { ShoppingCartContext } from "../../Context/Index";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const activeStyle = 'underline underline-offset-4';
  const context = useContext(ShoppingCartContext);

  return (
    <nav className='w-full h-14 hidden bg-gray-200 lg:flex p-4 justify-between'>
      <ul>
        <li className='text-xl font-black'>
          <NavLink to='/'>
            STYLE SYNERGY
          </NavLink>
        </li>
      </ul>
      <ul className='flex space-x-8'>
        <li className='font-bold text-md'>
          <NavLink to='/mango' className={({ isActive }) => isActive ? activeStyle : undefined}>
            MNG
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/american-brands' className={({ isActive }) => isActive ? activeStyle : undefined}>
            AMERICAN BRANDS
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/rifle' className={({ isActive }) => isActive ? activeStyle : undefined}>
            RIFLE
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/naf-naf' className={({ isActive }) => isActive ? activeStyle : undefined}>
            NAF-NAF
          </NavLink>
        </li>
        <input className="outline-none p-3 rounded-full shadow-lg" placeholder="busca tu producto" type="search" />
      </ul>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/my-orders/last">
            <ShoppingBagIcon className="h-6 w-6" />
          </NavLink>
        </li>
        {context.cartProducts.length}
        <li>Hola, {context.nombreUsuario}</li>
        <li>
          
          <div className="relative z-10">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <UserCircleIcon className="h-6 w-6" />
            </button>
            <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownVisible ? '' : 'hidden'}`}>
              <div className="py-1">
                <NavLink to="/sign-in" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Login</NavLink>
                <NavLink to="/registro" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Registrarse</NavLink>
                <NavLink to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Mi cuenta</NavLink>
                <NavLink to="/my-orders" className="block px-4 py-2 text-sm text-black hover:bg-gray-400 hover:font-semibold">Historial de compras</NavLink>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;