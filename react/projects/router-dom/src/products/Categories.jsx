import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Caegories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(res => setCategories(res))
    }, [])

    return (<>
        <h1>Category</h1>
        <div className="list-group">
            {categories.map((category, index) =>
                <Link
                    className="list-group-item list-group-item-action"
                    to={`/products/category/${category}`}
                    key={index}
                >
                    {category.toUpperCase()}
                </Link>)}
        </div>
    </>)
}