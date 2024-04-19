import React from "react";
import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { ShoppingCartContext } from "../../Context/Index";
import Ordercards from "../../Components/OrderCards/Ordercards.jsx";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center mt-20">
        <p className="text-3xl font-bold">Resumen de compra</p>
        <div className="flex flex-col w-1/2">
          {context.orden?.slice(-1)[0].productos.map((producto, index) => (
            <Ordercards
              key={index}
              titulo={producto.titulo}
              imagen={producto.imagen}
              precio={producto.precio}
            />
          ))}
        </div>
        <button className="bg-black py-3 text-white w-1/2 rounded-lg mt-6 mb-6">PAGAR AHORA</button>
      </div>
    </>
  );
};

export default MyOrder;
