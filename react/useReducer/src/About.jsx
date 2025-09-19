import { useReducer } from "react"
import { countReducer, DECREMENT, INCREMENT, initialCountState, RESET } from "./reducer/count"

export default function About() {

    const [count, dispatch] = useReducer(countReducer, initialCountState)

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
            <h1>Count ::: {count}</h1>
            <button onClick={() => dispatch(INCREMENT)}>İncrement</button>
            <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
        </>
    )
}