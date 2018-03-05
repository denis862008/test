const initialState = {
    todos: []
};

function todos (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let { todos } = state;
            todos.push({ ...action.payload });
            return { ...state, todos };
        default:
            return state;
    }
}

export default todos;
