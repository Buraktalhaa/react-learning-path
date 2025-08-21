import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"

export default function Login() {
    const { handleLogIn } = useContext(SiteContext)
    return (<>
        <h1>Login</h1>
        <button
            className="btn btn-primary"
            onClick={handleLogIn}
        >
            Log in
        </button>
    </>)
}