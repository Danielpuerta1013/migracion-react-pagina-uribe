import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'


const Rifle = () => {
  return (
    <div>
      <NavBar/>
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-green-950 uppercase'>prendas versátiles, modernas y cargadas de estilo</p>
        <div className='flex justify-between items-center mt-4'>
          <BotonesBusqueda/>      

        </div>
      </LayoutMarcas>
      <LayoutCards>
        
      </LayoutCards>
      <FooterMovil/>
      
    </div>
  )
}

export default Rifle
