import { useContext, useEffect, useState } from "react"
import Navbar from "./components/navbar"
import SiteRoutes from "./router/SiteRoutes"
import { SiteContext } from "./context/SiteContext"

function App() {

  const { user, handleLogIn, handleLogout } = useContext(SiteContext)

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <SiteRoutes ></SiteRoutes>

          </div>
        </div>
      </div>
    </>
  )
}

export default App