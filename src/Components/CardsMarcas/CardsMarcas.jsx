import React from 'react'

const CardsMarcas = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src="./img/car1.png" alt="Bermuda cargo tono claro para hombre" className="w-full h-40 object-contain rounded-md mb-2" />
            <div className="text-center mb-2">
                <h3 className="text-lg font-medium mb-1">Bermuda cargo tono claro para hombre</h3>
                <p className="text-gray-500 text-sm mb-2">$159.900</p>
            </div>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Add to cart</button>
        </div>
    )
}

export default CardsMarcas
