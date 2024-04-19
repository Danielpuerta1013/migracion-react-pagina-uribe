import { createContext } from "react"
import { useState } from "react"


export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {
    // contar productos en el carro
    const[count,setCount]=useState(0)

    //abrir y cerrar la pestaña de detalles
    const[isProductDetailOpen,setIsProductDetailOpen]=useState(false)
    const openProductDetail=()=>setIsProductDetailOpen(true)
    const closeProductDetail=()=>setIsProductDetailOpen(false)

    //abrir y cerrar la pestaña de check out del carrito
    const[isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen]=useState(false)
    const openCheckoutSideMenu=()=>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu=()=>setIsCheckoutSideMenuOpen(false)

    ///abrir el detalle de producto mostrando productos
    const[productToShow,setProductToShow]=useState({})
    //productos del carrito de compras, agregar
    const[cartProducts,setCartProducts]=useState([])

    // guarda y actualiza la cantidad de prendas
    const [cantidadPrendas, setCantidadPrendas] = useState(1); // Estado para almacenar la cantidad seleccionada

    const handleCantidadChange = (event) => {
        // Actualiza el estado de la cantidad cuando el valor del input cambia
        setCantidadPrendas(parseInt(event.target.value));
    };

    //orden carrito
    const[orden,setOrden]=useState([])

    
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
            setOrden

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}