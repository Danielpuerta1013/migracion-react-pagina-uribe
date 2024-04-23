import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/Index";
import { Link } from "react-router-dom";
import HistorialCards from '../../Components/HistorialCards/HistorialCards'
import NavBar from '../../Components/NavBar/NavBar';

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center  mt-20'>
        <div className='flex items-center justify-center relative w-80'>
          
          <h1 className='text-2xl font-bold mb-6'>Historial de ordenes</h1>
        </div>
        {
          context.orden.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <HistorialCards precioTotal={order.precioTotal} totalProductos={order.productosTotales} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default MyOrders
