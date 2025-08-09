import Navbar from "./components/navbar"
import SiteRoutes from "./router/SiteRoutes"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            
          <SiteRoutes></SiteRoutes>

          </div>
        </div>
      </div>
    </>
  )
}

export default App