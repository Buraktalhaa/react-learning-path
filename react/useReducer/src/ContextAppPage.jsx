import { useContext } from "react"
import { SiteContext } from "./context/SiteContext"
import { DECREMENT, RESET } from "./reducer/count"

export default function ContextAppPage() {
    const { counter: { state, dispatch } } = useContext(SiteContext)
    return <>
        <h2>Context App Page : Context API kullanıldı.</h2>
        <h2>{state}</h2>
        <button onClick={() => dispatch("INCREMENT")}>İncrement</button>
        <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(RESET)}>Reset</button>
    </>
}