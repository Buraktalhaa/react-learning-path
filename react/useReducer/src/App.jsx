
import { DECREMENT, RESET } from "./reducer/count"
import About from "./ABOUT.JSX"
import { useContext } from "react"
import { SiteContext } from "./context/SiteContext"
import ContextAppPage from "./ContextAppPage"

function App() {
  const { counter: { state, dispatch } } = useContext(SiteContext)
  console.log(state);

  return (
    <>
      <h1>App</h1>
      <h1>Count ::: {state}</h1>
      <button onClick={() => dispatch("INCREMENT")}>İncrement</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
      <hr />
      <ContextAppPage />
      <hr />
      <About />
    </>
  )
}

export default App
