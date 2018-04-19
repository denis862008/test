const initialState = {
    filter: 'SHOW_ALL'
};

function filter (state = initialState, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

export default filter;
