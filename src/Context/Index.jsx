import { createContext } from "react"
import { useState, useEffect } from "react"


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
        setCantidadPrendas(parseInt(event.target.value));
    };

    // carrito de compras orden

    const [orden, setOrden] = useState([])

    //buscar por titulo
    const [buscarPorTitulo, setBuscarPorTitulo] = useState(null)
    //items filtrados
    const [itemsFiltrados, setItemsFiltrados] = useState(null)

    const itemsFiltradosPorTitulo = (productos, buscarPorTitulo) => {
        return productos?.filter(item => item.titulo.toLowerCase().includes(buscarPorTitulo.toLowerCase()))
    }

    //buscar por categoria

    const [buscarPorCategoria, setBuscarPorCategoria] = useState(null);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    console.log(buscarPorCategoria)
    console.log(categoriaSeleccionada)

    const itemsFiltradosPorCategoria = (productos, categoria) => {
        return productos?.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
    };


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
            buscarPorCategoria, 
            setBuscarPorCategoria,
            itemsFiltradosPorCategoria,
            categoriaSeleccionada, 
            setCategoriaSeleccionada


        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}