import { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid'

export default function TaskForm() {
    const emptyForm = {
        task: "",
        priority: false
    }
    const [formData, setFormData] = useState(emptyForm)
    const [tasks, setTasks] = useState([])

    function handleFormSubmit(event) {
        event.preventDefault()
        if(formData.isEdited){
            const taskIndex = tasks.findIndex(item => item.uuid === formData.uuid)
            // dogrudan degistirmek yerine kopyasini alip degistirdik
            const newTasks = tasks.slice()
            // index ile sadece bir tane yeri degistirdik
            newTasks[taskIndex] = {...formData}
            setTasks(newTasks)
        }

        else if (formData.task.length > 3) {
            formData.uuid = uuidv4()
            setTasks(prev =>
                [formData, ...prev]
            )
        }

        setFormData(emptyForm)
        event.target.reset()
    }


    function handleInputChange(event) {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        })

        console.log(formData);
    }

    function removeTask(uuid) {
        setTasks(prev => prev
            .filter(item => item.uuid !== uuid))
    }


    function editTask(uuid) {
        const task = tasks.find(item => item.uuid === uuid)
        setFormData({...task, isEdited:true})
    }


    return (<>
        <TaskList removeTask={removeTask} tasks={tasks} editTask={editTask}></TaskList>
        <form onSubmit={handleFormSubmit}>
            <div className="row mb-3">
                <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="task"
                        name="task"
                        value={formData.task}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="priority"
                            name="priority"
                            checked={formData.priority}
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="priority">
                            Priority
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    </>)
}