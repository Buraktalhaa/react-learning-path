import { useContext, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "@radix-ui/react-label"
import { ToDoContext } from "./context/TodosContext"
import { ADD_TODO } from "./toDo/actionType"

function App() {
  // state ve dispatch e erişebiliyoruz artık
  const {state, dispatch} = useContext(ToDoContext)
  const [todo, setTodo] = useState("")

  function handleClick() {
    if (todo.trim() === "") return
    dispatch({ type: ADD_TODO, value: todo })
    setTodo("") 
  }

  return (
    <>
      <h1 className="flex justify-center">Reducer Practice With Context</h1>
      <div className="w-full p-6 flex justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Add a New Todo</CardTitle>
            <CardDescription>
              Keep track of your tasks by adding them to your todo list
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => { e.preventDefault(); handleClick() }}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="todo">Todo</Label>
                  <Input
                    id="todo"
                    type="text"
                    placeholder="e.g. Finish homework"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 mt-4">
                <Button type="submit" className="w-full">
                  Add Todo
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full max-w-sm mt-6">
        <CardHeader>
          <CardTitle>All Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            {state.map((item: any) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default App
