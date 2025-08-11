import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Communication from "../pages/Communication"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"
import { Category, Product, ProductsLayout } from "../products"
import { Products } from "../products"
import Login from "../pages/Login"
import Fav from "../pages/Fav"
import PrivateRoute from "../../PrivateRoute"


export default function SiteRoutes({ handleLogIn, user , loading}) {
    
    return (<>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/communication" element={<Communication />}></Route>
            <Route path="/products" element={<ProductsLayout />}>
                <Route index={true} element={<Products />}></Route>
                <Route path="category/:categoryName" element={<Category />}></Route>
                <Route path="product/:productId" element={<Product />}></Route>
            </Route>

            {/* Private Route */}
            <Route path="/favorites"
                element={
                    <PrivateRoute user={user} loading={loading}>
                        <Fav></Fav>
                    </PrivateRoute>
                }
            >
            </Route>

            {/* Login */}
            <Route path="/login" element={<Login handleLogin={handleLogIn} />}></Route>

            {/* Other pages */}
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </>)
}