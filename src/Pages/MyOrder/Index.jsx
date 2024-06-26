import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { ShoppingCartContext } from "../../Context/Index";
import Ordercards from "../../Components/OrderCards/Ordercards.jsx";
import Swal from "sweetalert2";

const MyOrder = () => {
  const redireccion = useNavigate();
  const context = useContext(ShoppingCartContext);

  const handleClick = () => {  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El pago ha sido aceptado",
      showConfirmButton: false,
      timer: 1500
    });  
    redireccion('/');
  };

  const hayProductos = context.orden && context.orden.length > 0 && context.orden[0].productos.length > 0
  const pathActual = window.location.pathname
  let index = pathActual.substring(pathActual.lastIndexOf('/') + 1)
  if(index==='last') index=context.orden?.length-1

  
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center mt-20">
        <p className="text-3xl font-bold">Resumen de compra</p>
        {hayProductos ? (
          <div className="flex flex-col w-1/2">
            {context.orden?.[index]?.productos.map((producto) => (              
              <Ordercards
                key={producto.id_producto}
                titulo={producto.nombreProducto}
                imagen={producto.fotografia}
                precio={producto.precioUnitario}
              />
            ))}
            <button onClick={handleClick} className="bg-black py-3 text-white w-full rounded-lg mt-6 mb-6">PAGAR AHORA</button>
          </div>
        ) : (
          <div className="text-center mt-6">
            <p>No hay productos en el carrito</p>

          </div>
        )}
      </div>
    </>
  );
};

export default MyOrder;