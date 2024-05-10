
import { useState, useEffect } from "react"
import axios from "axios"


const CardsPaginaPrincipal = () => {
    const [productosApi, setProductosApi] = useState([]);
    const getProductosApi = async () => {
        const resultado = await axios.get("http://localhost:8080/storeapi/v1/producto",{ maxRedirects: 0 });           
        setProductosApi(resultado.data);                        
    };

    useEffect(() => {
        getProductosApi()
        
    }, [])
    useEffect(() => {
      
        
    }, [productosApi]);
    const productosLimitados = productosApi.slice(0, 15);
    console.log(productosLimitados)
    return (
        <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-8 overflow-hidden">
            {productosLimitados.map((producto, index) => (
                <div key={index} className="w-48 h-64 shadow-lg rounded-lg flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl">
                    <div className="w-full h-3/5 rounded-t-lg bg-cover" style={{ backgroundImage: `url(${producto.fotografia})` }}></div>
                    <div className="w-full h-2/5 bg-black rounded-b-lg">
                        <p className="text-white font-bold text-lg text-center">{producto.nombreProducto}</p>
                        <p className="text-white text-md text-center px-6 py-2">{producto.precioUnitario}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsPaginaPrincipal;