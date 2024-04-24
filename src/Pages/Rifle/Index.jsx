import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'
import CardsMarcas from '../../Components/CardsMarcas/CardsMarcas.jsx'
import ProductDetail from '../../Components/ProductDetail/ProductDetail.jsx'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx";
import productos from './productos.js'


const Rifle = () => {
  const context = useContext(ShoppingCartContext)

  useEffect(() => {
    if (context.buscarPorTitulo) context.setItemsFiltrados(context.itemsFiltradosPorTitulo(productos, context.buscarPorTitulo))
  }, [productos, context.buscarPorTitulo])

  const renderView = () => {
    let itemsFiltrados = [];
    
    if (context.buscarPorTitulo) {
      itemsFiltrados = context.itemsFiltrados || [];
    } else if (context.categoriaSeleccionada) {
      itemsFiltrados = context.itemsFiltradosPorCategoria(productos, context.categoriaSeleccionada);
    } else {
      itemsFiltrados = productos;
    }
  
    if (itemsFiltrados.length > 0) {
      return <CardsMarcas data={itemsFiltrados} />;
    } else {
      return <div><p>No hay coincidencias</p></div>;
    }
  }
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
