import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/Index";
import { TrashIcon } from '@heroicons/react/24/solid';



const Ordercards = (props) => {
    const context = useContext(ShoppingCartContext)
    const {  titulo, imagen, precio, handleDelete } = props;
    
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imagen} alt={titulo} />
                </figure>
                <p className='text-md font-light'>{titulo}</p>
            </div>
            <div className='flex items-center gap-2'>
                <input
                    type='number'
                    min='1' // Define el mínimo de unidades que se pueden seleccionar
                    value={context.cantidadPrendas} // Asigna el valor del estado a la cantidad
                    onChange={context.handleCantidadChange} // Maneja el cambio en el valor del input
                    className='w-8 text-lg font-medium text-center border border-gray-300 rounded-md'
                />
                <p className='text-lg font-medium'>{precio}</p>
                <TrashIcon onClick={()=>handleDelete(titulo)} className='h-6 w-6 text-black cursor-pointer' />
            </div>
        </div>
    );
};

export default Ordercards;