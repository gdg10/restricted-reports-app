const initialState = {
    client : ''
}

const report = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIENT':
            let newState = Object.assign({}, state);
            newState.client = action.payload;
            return newState;
        default:
            return state;
    }
}

export default report;