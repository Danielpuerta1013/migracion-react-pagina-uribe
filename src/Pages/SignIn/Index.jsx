import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index";
import axios from 'axios'
import Swal from 'sweetalert2'



const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [usuarios, setUsuarios] = useState([])
  let redireccion = useNavigate()

  const consultarUsuarios = async () => {
    let respuesta = await axios.get("http://localhost:8080/storeapi/v1/usuario");
    let usuarios = respuesta.data
    setUsuarios(usuarios)
    console.log(respuesta)
  }
  useEffect(() => {
    consultarUsuarios()

  }, [])
  useEffect(() => {
    console.log(usuarios)
  }, [usuarios]);
  console.log(usuarios)


  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el correo y la cédula coinciden con algún usuario de la lista
    const usuarioEncontrado = usuarios.find(usuario => usuario.correo === email && usuario.cedula === cedula);
    console.log(usuarioEncontrado)

    if (usuarioEncontrado) {
      // Redireccionar al usuario a /home si se encuentra en la lista de usuarios
      context.setNombreUsuario(usuarioEncontrado.nombres)
      context.setIsUsuarioActivo(true)
      redireccion('/')
    } else {
      // Mostrar alerta indicando que el usuario no fue encontrado
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no encontrado. Por favor, verifique sus credenciales.'
      });
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-fixed" id="fondo_registro" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/database-proyecto-final.appspot.com/o/img-sign-registro%2Ffondologin2.jpg?alt=media&token=b7324039-40e8-460e-ae99-eb784f6310f6)` }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Iniciar sesión
          </h2>
        </div>
        <form className="mt-8 space-y-6 bg-white bg-opacity-50 p-8 rounded-md shadow-md" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Cedula</label>
              <input onChange={(e) => setCedula(e.target.value)} id="cedula" name="cedula" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Cedula de ciudadania" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Correo</label>
              <input onChange={(e) => setEmail(e.target.value)} id="correo" name="password" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Correo electronico" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-black">
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <NavLink to="/registro" className="font-medium text-black hover:text-white">
                registrarme
              </NavLink>
            </div>

          </div>

          <div>
            <button onClick={handleSubmit} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar sesión
            </button>
          </div>
          <NavLink to="/" className="font-medium text-black hover:text-blue">
            Regresar al home
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default SignIn
