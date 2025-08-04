export default function TaskList({ tasks, removeTask, editTask }) {
    if (tasks.length === 0) {
        return <></>
    }

    return (<>
        <div className="p-5 bg-light mb-5 border rounded">
            <h4>Tasks:</h4>
            <ul className="list-group">
                {tasks.map((item) =>
                    <li
                        className="list-group-item" key={item.uuid}>
                        {item.priority && <span className="badge text-bg-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                        </svg></span>
                        }
                        {item.task}
                        <div className="btn-group float-end" aria-label="Basic example">
                            <button
                                type="button"
                                className="btn btn-sm btn-info"
                                onClick={() => editTask(item.uuid)}>
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => removeTask(item.uuid)}>
                                Delete
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </>)
}