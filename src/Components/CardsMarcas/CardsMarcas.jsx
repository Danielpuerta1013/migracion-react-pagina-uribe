import React from "react";

const CardsMarcas = ({ data }) => {
    return (
      <>
        {data.map((producto, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="w-full h-40 object-contain rounded-md mb-2"
            />
            <div className="text-center mb-2">
              <h3 className="text-lg font-medium mb-1 lowercase">{producto.titulo}</h3>
              <p className="text-gray-500 text-sm mb-2">{producto.precio}</p>
            </div>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Añadir al carrito
            </button>
          </div>
        ))}
      </>
    );
  };
  
  export default CardsMarcas;