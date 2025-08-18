import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SiteContext = createContext();


function SiteContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
           setUser(JSON.parse(localStorage.getItem("user")) ?? null)
    }, [])


    function handleLogIn() {
        const userData = { id: 1, name: "lorem" }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        navigate('/')
    }

    function handleLogout() {
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <SiteContext.Provider value={{ user, handleLogIn, handleLogout }}>
            {children}
        </SiteContext.Provider>
    );
}

export { SiteContext, SiteContextProvider };