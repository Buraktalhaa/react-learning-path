import { createContext, useReducer } from "react";
import ToDoReducer, { initial } from "@/toDo/toDo";

const ToDoContext = createContext<any>(null);

function ToDoContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, toDoDispatch] = useReducer(ToDoReducer, initial);
  const context = { state: todos, dispatch: toDoDispatch };

  return (
    <ToDoContext.Provider value={context}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoContextProvider };
