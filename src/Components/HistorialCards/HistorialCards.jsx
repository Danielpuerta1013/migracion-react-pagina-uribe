import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/Index";
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon} from '@heroicons/react/24/solid';

const HistorialCards = (props) => {
  const context = useContext(ShoppingCartContext)
  const { precioTotal, totalProductos } = props
  const fechaActual = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);
  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
    <div className='flex flex-col'>
      <div className='flex items-center'>
        <CalendarDaysIcon className='w-4 h-4 mr-1 text-black' />
        <span className='font-light'>{fechaFormateada}</span>
      </div>
      <div className='flex items-center'>
        <ShoppingBagIcon className='w-4 h-4 mr-1 text-black' />
        <span className='font-light'>productos: {totalProductos}</span>
      </div>
    </div>
    <span className='font-semibold'>${precioTotal}</span>
  </div>
  )
}

export default HistorialCards
