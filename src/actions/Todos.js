export function addTodo(todos, value) {
    return (dispatch) => {
        let id = 1;

        if (todos.length) id = todos[todos.length - 1].id++;
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id,
                text: value
            }
        });
    };
}
