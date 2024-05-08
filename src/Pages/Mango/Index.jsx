import { useContext, useEffect,useState } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import axios from "axios"
import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'
import CardsMarcas from '../../Components/CardsMarcas/CardsMarcas.jsx'
import ProductDetail from '../../Components/ProductDetail/ProductDetail.jsx'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx";



const Mango = () => {
  const context = useContext(ShoppingCartContext)

  const [productosApiMNG, setProductosApiMNG] = useState([]);
  const getProductosApi = async () => {
        const resultado = await axios.get("http://localhost:8080/storeapi/v1/marca/1",{ maxRedirects: 0 });           
        setProductosApiMNG(resultado.data.productos);                        
    };

    useEffect(() => {
        getProductosApi()
        
    }, [])
    useEffect(() => {
        console.log(productosApiMNG)
    }, [productosApiMNG]);

  useEffect(() => {
    if (context.buscarPorTitulo) context.setItemsFiltrados(context.itemsFiltradosPorTitulo(productosApiMNG, context.buscarPorTitulo))
  }, [productosApiMNG, context.buscarPorTitulo])

  const renderView = () => {
    let itemsFiltrados = [];
  
    if (context.buscarPorTitulo) {
      itemsFiltrados = context.itemsFiltrados || [];    
    } else if (context.categoriaSeleccionada === null || context.categoriaSeleccionada === "Todos") {
      // Mostrar todos los productos si no hay filtro de categoría o se ha seleccionado "Todos"
      itemsFiltrados = productosApiMNG;
    } else {
      // Filtrar productos por categoría si se ha seleccionado una categoría específica
      if (context.productosFiltradosPorCategoria !== null) {
        itemsFiltrados = productosApiMNG.filter(producto => {
          return context.productosFiltradosPorCategoria.some(filtrado => filtrado.id_producto === producto.id_producto);
        });
      }
    }
  
    if (itemsFiltrados.length > 0) {
      return <CardsMarcas data={itemsFiltrados} />;
    } else {
      // Si no se encuentra ningún producto filtrado, mostrar todos los productos disponibles
      return <CardsMarcas data={productosApiMNG} />;
    }
  };
  return (
    <div>
      <NavBar />
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-orange-800 uppercase'>Hogar del estilo y la cultura Mediterránea en Colombia.</p>
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

export default Mango
