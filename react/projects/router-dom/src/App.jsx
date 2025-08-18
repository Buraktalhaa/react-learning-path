import { useContext, useEffect, useState } from "react"
import Navbar from "./components/navbar"
import SiteRoutes from "./router/SiteRoutes"
import { SiteContext } from "./context/SiteContext"

function App() {

  const { user, handleLogIn, handleLogout } = useContext(SiteContext)

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout}></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <SiteRoutes handleLogIn={handleLogIn} user={user}></SiteRoutes>

          </div>
        </div>
      </div>
    </>
  )
}

export default App