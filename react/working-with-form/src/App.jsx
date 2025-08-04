import { useState } from 'react'
import TaskForm from './components/TaskForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-sm-8 mt-5">
            <TaskForm></TaskForm>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
