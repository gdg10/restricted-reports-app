const initialState = {
    client : '',
    subject : '',
    comparables : []
}

const report = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_CLIENT':
            newState.client = action.payload;
            return newState;
        case 'ADD_SUBJECT':
            return ({subject : action.payload});
        case 'ADD_COMP':
            newState.comparables.push(action.payload);
            return newState;
        case 'REMOVE_COMP':
            return ({comparables : state.comparables.splice(action.payload)});
        default:
            return state;
    }
}

export default report;