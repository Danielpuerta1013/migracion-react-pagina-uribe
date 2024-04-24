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


const NafNaf = () => {
  const context = useContext(ShoppingCartContext)

  useEffect(() => {
    if (context.buscarPorTitulo) context.setItemsFiltrados(context.itemsFiltradosPorTitulo(productos, context.buscarPorTitulo))
  }, [productos, context.buscarPorTitulo])

  const renderView=()=>{
    if(context.buscarPorTitulo?.length>0){
      if(context.itemsFiltrados?.length>0){
        return(
          <CardsMarcas data={context.itemsFiltrados} />
        )
      }else{
        <div><p>no hay coincidencias</p></div>
      }
    }else{
      return(
        <CardsMarcas data={productos} />
      )

    }
  }
  return (
    <div>
      <NavBar />
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-blue-900 uppercase'>Vive con estilo</p>
        <div className='flex justify-between items-center mt-4'>
          <BotonesBusqueda />
        </div>
      </LayoutMarcas>
      <ProductDetail />
      <CheckoutSideMenu/>
      <LayoutCards>
        {renderView()}
      </LayoutCards>
      <FooterMovil />


    </div>
  )
}

export default NafNaf
