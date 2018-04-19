export function addTodo(value) {
    return (dispatch, getState) => {
        let id = 1;
        const { todos } = getState().todos;

        if (todos.length) id = todos[todos.length - 1].id + 1;
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id,
                text: value,
                completed: false
            }
        });
    };
}

export function toggleTodo(id) {
    return (dispatch, getState) => {
        const { todos } = getState().todos;
        const idx = todos.findIndex(todo => todo.id === id);

        todos[idx].completed = !todos[idx].completed;

        dispatch({
            type: 'TOGGLE_TODO',
            payload: todos
        });
    }
}

export function setVisibilityFilter(filter) {
    return dispatch => {
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: filter
        })
    };
}
