import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Communication from "../pages/Communication"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"
import { Category, Product } from "../products"
import { Products } from "../products"
import Login from "../pages/Login"
import Fav from "../pages/Fav"
import PrivateRoute from "../PrivateRoute"
import ProductLayout from "../products/ProductsLayout"

export default function SiteRoutes({handleLogIn, user, children}) {

    return (
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Communication />} />
        <Route path='/products' element={<ProductLayout />}>
          <Route index={true} element={<Products user={user} />} />
          <Route path='category/:categoryName' element={<Category user={user} />} />
          <Route path='product/:productId' element={<Product user={user} />} />
        </Route>
        <Route path='/login' element={<Login handleLogIn={handleLogIn} />} />
        <Route path='/fav' element={<PrivateRoute user={user}><Fav /></PrivateRoute>} />
  
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    )
  }