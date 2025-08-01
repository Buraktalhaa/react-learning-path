import { USERS } from "../data/Users";

export function ConditionalRenderedUserList(props) {
    if (!props.isActive) {
        return null
    }
    return (<>
        <h2>User List</h2>
        <ul>
            {USERS.map((user, index) => <li key={index}>{user}</li>)}
        </ul>

    </>)
}