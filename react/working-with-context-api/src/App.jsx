import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className="container my-3">
        <div className="row">
          <SiteRoutes />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App