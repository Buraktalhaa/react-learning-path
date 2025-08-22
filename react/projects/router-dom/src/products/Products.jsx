import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../products"
import { SiteContext } from "../context/SiteContext";

export default function Products() {

    const [last10Products, setLast10Products] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(res => setLast10Products(res))
    }, [])

    return (
        <>
            <h2>Products:</h2>
            <div className="row row-cols-sm-3 row-cols-md-4">
                {last10Products.map(item => <ProductCard item={item} key={item.id} />)}
            </div>
        </>
    )
}