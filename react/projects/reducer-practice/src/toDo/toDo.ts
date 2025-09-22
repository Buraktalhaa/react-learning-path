import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, REMOVE_TODO, RESET_TODO } from './actionType';


type Todo = {
    id: string;
    value: string;
};

type ActionType = {
    type: string;
    id?: string;
    value?: string
}

export const initial: Todo[] = []

export default function ToDoReducer(
    state: Todo[],
    action: ActionType
): Todo[] {
    switch (action.type) {

        // value gönder
        case ADD_TODO :
            return [
                ...state,
                { id: uuidv4(), value: action.value ?? "" }
            ]

        // id gönder
        case REMOVE_TODO :
            return state.filter(todo => todo.id !== action.id)

        case RESET_TODO :
            return initial

        default:
            return state
    }
}