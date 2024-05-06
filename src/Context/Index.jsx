import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"



export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {
    // contar productos en el carro
    const [count, setCount] = useState(0)
    //cuenta cuantas cards hay


    //abrir y cerrar la pestaña de detalles
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //abrir y cerrar la pestaña de check out del carrito
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    ///abrir el detalle de producto mostrando productos
    const [productToShow, setProductToShow] = useState({})
    //productos del carrito de compras, agregar
    const [cartProducts, setCartProducts] = useState([])

    // guarda y actualiza la cantidad de prendas
    const [cantidadPrendas, setCantidadPrendas] = useState(1); // Estado para almacenar la cantidad seleccionada

    const handleCantidadChange = (event) => {
        // Actualiza el estado de la cantidad cuando el valor del input cambia
        setCantidadPrendas(event.target.value);
    };

    // carrito de compras orden

    const [orden, setOrden] = useState([])

    //buscar por titulo
    const [buscarPorTitulo, setBuscarPorTitulo] = useState(null)
    //items filtrados
    const [itemsFiltrados, setItemsFiltrados] = useState(null)

    const itemsFiltradosPorTitulo = (productos, buscarPorTitulo) => {
        return productos?.filter(item => item.nombreProducto.toLowerCase().includes(buscarPorTitulo.toLowerCase()))
    }

    //buscar por categoria

    const [productosFiltradosPorCategoria, setProductosFiltradosPorCategoria] = useState([]);
    const obtenerProductosPorCategoria = async (categoriaId) => {
        try {
            const resultado = await axios.get(`http://localhost:8080/storeapi/v1/tipoprenda/${categoriaId}`);
            setProductosFiltradosPorCategoria(resultado.data.productos);
        } catch (error) {
            console.error("Error al obtener productos por categoría:", error);
        }
    };


    //login


    const [nombreUsuario, setNombreUsuario] = useState(null);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            cantidadPrendas,
            handleCantidadChange,
            orden,
            setOrden,
            buscarPorTitulo,
            setBuscarPorTitulo,
            itemsFiltrados,
            setItemsFiltrados,
            itemsFiltradosPorTitulo,
            productosFiltradosPorCategoria,
            obtenerProductosPorCategoria,
            setProductosFiltradosPorCategoria,
            nombreUsuario,
            setNombreUsuario

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}