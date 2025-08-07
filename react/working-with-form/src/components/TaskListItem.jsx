import TaskListItemSvg from "./TaskListItemSvg";

export default function TaskListItem({ task }) {
    return (
        <li
            className="list-group-item">
                {task.priority && <span className="badge text-bg-secondary">
                    <TaskListItemSvg></TaskListItemSvg>
                </span>}
            {task.task}
            <div className="btn-group float-end" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => editTask(task.uuid)}>
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => removeTask(task.uuid)}>
                    Delete
                </button>
            </div>
        </li>
    )

}