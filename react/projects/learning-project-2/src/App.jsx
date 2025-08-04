import { useEffect, useState } from 'react'
import { products as producstObject } from './data/products';
import ImgNotSelected from './components/ImgNotSelected';
import ImgContainer from './components/ImgContainer';

function App() {
  const [products, setProducts] = useState(producstObject)
  const [isActiveProduct, setIsActiveProduct] = useState(products.find(item => item.isActive))
  console.log(products);

  // VERIYI JSON FOTMATINDAN ALMANIN KOLAY BIR YOLU
  /*
  useEffect(() => {
    fetch("./src/data/products.json")
      .then(res => res.json())
      .then(res => setProducts(res.data))
  }, [])

*/

  function handleProductSelect(productId) {
    // secilen item i bul
    const selectedProduct = producstObject.find(item => item.id === productId)
    // aktif yap
    selectedProduct.isActive = true
    // setActiveProuct a atama yap
    setIsActiveProduct(selectedProduct)


    // secilmeyenleri bul
    const notSelectedProduct = producstObject
      .filter(item => item.id !== productId)
      .map(item => {
        return {
          ...item,
          isActive: false
        }
    })

    const newProducts = [
      ...notSelectedProduct,
      selectedProduct
    ].sort((a,b) => a.id - b.id)

    // product listesini secilen ve secilmeyenlerle yeniden olustur  
    setProducts(newProducts)
  }

  return (
    <>
      <main className="container">
        {isActiveProduct ? <img src={isActiveProduct.imgName}></img> : <ImgNotSelected></ImgNotSelected>}
        <ImgContainer products={products} handleProductSelect={handleProductSelect}></ImgContainer>
      </main>
    </>
  )
}

export default App


/*
  fetch("./src/data/products.json")
  - Bu, tarayıcıya ./src/data/products.json adlı dosyayı HTTP üzerinden istemesini söyler.
  - fetch asenkron (zaman alan) bir işlemdir ve bir Promise döner.
*/

/*
.then(res => res.json())
- fetch, bir Response nesnesi döner.
- Bu Response nesnesi, gelen veriyi doğrudan içermez. Veriyi okumak için .json() metodunu çağırmak gerekir.
- res.json() da bir Promise döner ve gelen yanıtı JavaScript objesine (JSON → JS) çevirir.
*/