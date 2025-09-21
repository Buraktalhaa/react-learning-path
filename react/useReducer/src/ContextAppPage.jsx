import { useContext } from "react"
import { SiteContext } from "./context/SiteContext"
import { DECREMENT, INCREMENT, RESET } from "./reducer/count/count"

export default function ContextAppPage() {
    const { counter: { state: count, dispatch: counterDispatch } } = useContext(SiteContext)
    return <>
        <h2>Context App Page : Context API kullanıldı.</h2>
        <h2>{count}</h2>
        <button onClick={() => counterDispatch({ type: INCREMENT })}>İncrement</button>
        <button onClick={() => counterDispatch({ type: DECREMENT })}>Decrement</button>
        <button onClick={() => counterDispatch({ type: RESET })}>Reset</button>
    </>
}