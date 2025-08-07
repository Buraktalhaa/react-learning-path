import { useEffect, useState } from "react"
import TaskListItem from "./TaskListItem"

export default function TaskList({ tasks, removeTask, editTask }) {

    const [priority, setPriority] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState(tasks)

    function handlePriority() {
        setPriority(prev => !prev)
    }

    // tasks (yani tüm görevler) değiştiğinde, filteredTasks da otomatik olarak güncellensin diye.
    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks])

    // tasks ya da priority degistiginde, priority durumu ne ise ona gore filtreleme yapar
    useEffect(() => {
        priority ? setFilteredTasks(tasks.filter(item => item.priority === priority)) : setFilteredTasks(tasks)
    }, [priority])

    if (tasks.length === 0) {
        return <></>
    }

    return (<>
        <div className="p-5 bg-light mb-5 border rounded">
            <h4>Tasks:
                <button className="btn btn-sm btn-info float-end" onClick={handlePriority}>{!priority ? "Show only priority items" : "Show all"}</button>
            </h4>
            <ul className="list-group">
                {filteredTasks.map((task) =>
                    <TaskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask}></TaskListItem>
                )}
            </ul>
        </div>
    </>)
}