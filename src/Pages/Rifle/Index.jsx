import { useContext, useEffect,useState } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import axios from "axios";
import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'
import CardsMarcas from '../../Components/CardsMarcas/CardsMarcas.jsx'
import ProductDetail from '../../Components/ProductDetail/ProductDetail.jsx'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx";



const Rifle = () => {
  const context = useContext(ShoppingCartContext)

  const [productosApiR, setProductosApiR] = useState([]);
  const getProductosApi = async () => {
        const resultado = await axios.get("http://localhost:8080/storeapi/v1/marca/3",{ maxRedirects: 0 });           
        setProductosApiR(resultado.data.productos);                        
    };

    useEffect(() => {
        getProductosApi()
        
    }, [])
    useEffect(() => {
        
    }, [productosApiR]);

  useEffect(() => {
    if (context.buscarPorTitulo) context.setItemsFiltrados(context.itemsFiltradosPorTitulo(productosApiR, context.buscarPorTitulo))
  }, [productosApiR, context.buscarPorTitulo])

  const renderView = () => {
    let itemsFiltrados = [];
  
    if (context.buscarPorTitulo) {
      itemsFiltrados = context.itemsFiltrados || [];    
    } else if (context.categoriaSeleccionada === null || context.categoriaSeleccionada === "Todos") {
      // Mostrar todos los productos si no hay filtro de categoría o se ha seleccionado "Todos"
      itemsFiltrados = productosApiR;
    } else {
      // Filtrar productos por categoría si se ha seleccionado una categoría específica
      if (context.productosFiltradosPorCategoria !== null) {
        itemsFiltrados = productosApiR.filter(producto => {
          return context.productosFiltradosPorCategoria.some(filtrado => filtrado.id_producto === producto.id_producto);
        });
      }
    }
  
    if (itemsFiltrados.length > 0) {
      return <CardsMarcas data={itemsFiltrados} />;
    } else {
      // Si no se encuentra ningún producto filtrado, mostrar todos los productos disponibles
      return <CardsMarcas data={productosApiR} />;
    }
  };
  return (
    <div>
      <NavBar />
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-green-950 uppercase'>prendas versátiles, modernas y cargadas de estilo</p>
        <div className='flex justify-between items-center mt-4'>
          <BotonesBusqueda />

        </div>
      </LayoutMarcas>
      <ProductDetail />
      <CheckoutSideMenu />
      <LayoutCards>
        {renderView()}
      </LayoutCards>
      <FooterMovil />

    </div>
  )
}

export default Rifle
