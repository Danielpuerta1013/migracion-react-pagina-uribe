import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context/Index";
import axios from 'axios'
import Swal from 'sweetalert2'


const Registro = () => {
  const context = useContext(ShoppingCartContext);
  let redireccion = useNavigate()
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [medioPago, setMedioPago] = useState('efectivo');
  const handleSubmit = async () => {
    try {
      // Verificar si todos los campos están llenos
      if (nombres && apellidos && cedula && correo && medioPago) {
        // Crear el objeto de datos a enviar
        const data = {
          nombres: nombres,
          apellidos: apellidos,
          cedula: cedula,
          correo: correo,
          sexo: "m",
          medioPago: medioPago,
          pais: "colombia",
          departamento: "antioquia",
          municipio: "medellin",
          codigoPostal: "123348"
        };

        // Realizar la solicitud POST a la API
        const response = await axios.post('http://localhost:8080/storeapi/v1/usuario', data);

        // Mostrar mensaje de éxito
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuario registrado correctamente.'
          });
          // Redireccionar al usuario a la página de inicio de sesión
          redireccion('/sign-in');
        }
      } else {
        // Mostrar mensaje de error si algún campo está vacío
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, complete todos los campos.'
        });
      }
    } catch (error) {
      // Mostrar mensaje de error si hay algún problema con la solicitud
      console.error('Error al registrar usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 border bg-cover bg-fixed" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/database-proyecto-final.appspot.com/o/img-sign-registro%2FfondoRegistro.jpg?alt=media&token=0573a0ec-c855-4932-9610-d415b3a0b2cc)` }}>
      <form className="w-full max-w-2xl bg-white rounded p-8 shadow-xl border mt-16">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input id="nombre" className="border py-2 px-3 text-grey-darkest w-full" type="text" name="nombre" onChange={(e) => setNombres(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                Apellidos
              </label>
              <input id="apellidos" className="border py-2 px-3 text-grey-darkest w-full" type="text" name="apellidos" onChange={(e) => setApellidos(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cedula">
                Cedula
              </label>
              <input id="cedula" className="border py-2 px-3 text-grey-darkest w-full" type="text" name="cedula" onChange={(e) => setCedula(e.target.value)} />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                Correo
              </label>
              <input id="correo" className="border py-2 px-3 text-grey-darkest w-full" type="text" name="correo" onChange={(e) => setCorreo(e.target.value)} />
              <p className="text-red-500 hidden" id="errorCorreo">Este correo ya está registrado.</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medioPago">
                Medio de pago
              </label>
              <select id="medioPago" className="border py-2 px-3 text-grey-darkest w-full" name="medioPago" onChange={(e) => setMedioPago(e.target.value)}>
                <option value="tarjeta">Tarjeta de crédito</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia bancaria</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button onClick={handleSubmit} className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="botonRegistro">
            Registrar
          </button>
          <NavLink to="/sign-in" className="block mt-2 text-sm text-gray-600 underline">Volver al login</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Registro;