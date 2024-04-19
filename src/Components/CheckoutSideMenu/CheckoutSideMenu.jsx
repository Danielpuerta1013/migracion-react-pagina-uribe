import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Index";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Ordercards from "../../Components/OrderCards/Ordercards.jsx";
import { precioTotal } from "../../assets/utils/index.js";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  // funcion que filtra los elementos del carrito
  const handleDelete = (titulo) => {
    const filteredProducts = context.cartProducts.filter(
      (producto) => producto.titulo != titulo
    );
    context.setCartProducts(filteredProducts);
  };
  const fechaActual = new Date();

  const handleCheckout = () => {
    const ordertoAdd = {
      date: fechaActual,
      productos: context.cartProducts,
      productosTotales: context.cartProducts.length,
      precioTotal: precioTotal(context.cartProducts, context.cantidadPrendas),
    };
    context.setOrden([...context.orden, ordertoAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } my-order flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl text-center">Mi orden actual</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((producto, index) => (
          <Ordercards
            key={index}
            titulo={producto.titulo}
            imagen={producto.imagen}
            precio={producto.precio}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span className="font-light text-lg">Total:</span>
          <span className="font-medium text-xl">
            ${precioTotal(context.cartProducts, context.cantidadPrendas)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={() => handleCheckout()}
            type="button"
          >
            Ir a pagar
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
