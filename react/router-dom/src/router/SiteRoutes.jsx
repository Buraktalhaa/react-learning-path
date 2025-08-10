import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Communication from "../pages/Communication"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"
import { Category, Product, ProductsLayout } from "../products"
import { Products } from "../products"


export default function SiteRoutes() {
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
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </>)
}