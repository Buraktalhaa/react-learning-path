import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import SiteRoutes from "./router/SiteRoutes"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if(savedUser){
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  function handleLogIn() {
    const userData = {id: 1, name: "lorem"}
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    navigate('/')
  }

  function handleLogout() {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout}></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <SiteRoutes handleLogIn={handleLogIn} user={user} loading={loading}></SiteRoutes>

          </div>
        </div>
      </div>
    </>
  )
}

export default App