import { useReducer, createContext } from "react";
import { countReducer, initialCountState } from "../reducer/count/count";
import { initial, todoReducer } from "../reducer/todo";

const SiteContext = createContext()

function SiteContextProvider({ children }) {
    const [count, counterDispatch] = useReducer(countReducer, initialCountState)
    const [todos, toDoDispatch] = useReducer(todoReducer, initial)

    const context = {
        counter: { state: count, dispatch: counterDispatch },
        todos: { state: todos, dispatch: toDoDispatch }
    }

    return <SiteContext.Provider value={context}>
        {children}
    </SiteContext.Provider>
}

export { SiteContext, SiteContextProvider }