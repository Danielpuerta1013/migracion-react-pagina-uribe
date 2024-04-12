import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'
import CardsMarcas from '../../Components/CardsMarcas/CardsMarcas.jsx'
import productos from './productos.js'


const NafNaf = () => {
  return (
    <div>
      <NavBar />
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-blue-900 uppercase'>Vive con estilo</p>
        <div className='flex justify-between items-center mt-4'>
          <BotonesBusqueda />
        </div>
      </LayoutMarcas>
      <LayoutCards>
        <CardsMarcas data={productos}/>        
      </LayoutCards>
      <FooterMovil/>


    </div>
  )
}

export default NafNaf
