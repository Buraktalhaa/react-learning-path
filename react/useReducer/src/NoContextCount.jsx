import { useReducer } from "react"
import { countReducer, DECREMENT, INCREMENT, initialCountState, RESET } from "./reducer/count/count"

export default function NoContextCount() {

    const [state, dispatch] = useReducer(countReducer, initialCountState)

    // const [count, setCount] = useState(0)
    // function increment() {
    //   setCount(prev => prev + 1)
    // }

    // function decrement() {
    //   setCount(prev => prev - 1)
    // }

    // function reset() {
    //   setCount(0)
    // }
    return (
        <>
            <h1>Context Api kullanılmadı</h1>
            <h1>Count ::: {state}</h1>
            <button onClick={() => dispatch({ type: INCREMENT })}>İncrement</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
            <button onClick={() => dispatch({ type: RESET })}>Reset</button>

        </>
    )
}