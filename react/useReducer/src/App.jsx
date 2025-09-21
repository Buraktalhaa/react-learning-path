
import { DECREMENT, INCREMENT, RESET } from "./reducer/count/count"
import NoContextCount from "./NoContextCount.jsx"
import { useContext } from "react"
import { SiteContext } from "./context/SiteContext"
import ContextAppPage from "./ContextAppPage"
import AddTodo from "./AddTodo"

function App() {
  const { counter: { state: count, dispatch : counterDispatch } } = useContext(SiteContext)
  console.log(count);

  return (
    <>
      <AddTodo />


      <hr />

    {/* ContextAppPage ile birlikte context bu */}
      <h1>App</h1>
      <h1>Count ::: {count}</h1>
      <button onClick={() => counterDispatch({ type: INCREMENT })}>İncrement</button>
      <button onClick={() => counterDispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => counterDispatch({ type: RESET })}>Reset</button>


      <hr />


      <ContextAppPage />


      <hr />


      <NoContextCount />
    </>
  )
}

export default App
