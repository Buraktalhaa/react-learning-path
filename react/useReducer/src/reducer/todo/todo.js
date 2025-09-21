import { ADD_TODO, REMOVE_TODO, RESET_TODO } from "./actionType"
import { v4 as uuidv4 } from 'uuid'

export const initial = {
    todos: [],
    todo: ""
}

export function todoReducer(state, action) {
    console.log("state", state);
    console.log("action.payload", action.payload);

    switch (action.type) {
        case ADD_TODO :
            return {
                ...state,
                todos:
                    [...state.todos,
                        { id: uuidv4(), title: action.payload }
                    ]
            }
        case REMOVE_TODO :
            // payload ile id gönder
            const filteredTodos = state.todos.filter(item => item.id != action.payload)
            // filter zaten array döndürdüğü için tekrar [] içine koymaya gerek yok
            return {...state, todos: filteredTodos}
        case RESET_TODO :
            return initial
        default:
            return state
    }
}