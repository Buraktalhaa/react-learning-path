import { useState } from 'react'

function App() {
  const [imageId, setImageId] = useState(200)

  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`
  const pictureIds = [200, 201, 202, 203, 204]

  function handleClick(id) {
    setImageId(id)
  }

  return (
    <>
      <main className='container'>
        <hgroup>
          <h2>Gorsel Uygulamasi</h2>
          <h3>Gorsel</h3>
        </hgroup>
        <img src={getLoremPicsumImg(imageId)} alt="" style={{ width: "100%" }} />
        <div className="grid" style={{ marginTop: "30px" }}>
          {
            pictureIds.map((item, index) => <div key={index}>
              <img
                onClick={() => handleClick(item)}
                src={getLoremPicsumImg((item), 100, 100)}
                alt="" />
            </div>)
          }
        </div>
      </main>
    </>
  )
}


/*
          {
            [...Array(5)].map((item, index) => <div key={index}>
              <img
                onClick={() => handleClick(200 + index)}
                src={getLoremPicsumImg((200 + index), 100, 100)}
                alt="" />
            </div>)
          }
*/

export default App