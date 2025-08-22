import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product() {

    const { productId } = useParams()
    const [product, setProduct] = useState(null)


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(err => console.log(err));

    }, [productId])

    return (<>
        <h1>{product?.title}</h1>
        <img src={product?.image} alt="" className="w-100 img-thumbnail" />
        <p>{product?.description}</p>
    </>)
}