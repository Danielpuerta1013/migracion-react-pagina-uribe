import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from '../Home/Index.jsx'
import MyAccount from '../MyAccount/Index.jsx'
import MyOrder from '../MyOrder/Index.jsx'
import MyOrders from '../MyOrders/Index.jsx'
import SignIn from '../SignIn/Index.jsx'
import NotFound from '../NotFound/Index.jsx'
import Mango from '../Mango/Index.jsx'
import Rifle from '../Rifle/Index.jsx'
import NafNaf from '../NafNaf/Index.jsx'
import AmericanBrands from '../AmericanBrands/Index.jsx'



function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
    { path: '/mango', element: <Mango /> },
    { path: '/rifle', element: <Rifle /> },
    { path: '/naf-naf', element: <NafNaf /> },
    { path: '/american-brands', element: <AmericanBrands /> },
  ]);

  return (
    
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    
  )
}

export default App
