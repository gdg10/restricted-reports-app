const initialState = {
    client : '',
    subject : {},
    comparables : [],
    market : {}
}

const report = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_CLIENT':
            newState.client = action.payload;
            return newState;
        case 'ADD_SUBJECT':
            newState.subject = action.payload;
            return newState;
        case 'ADD_COMP':
            newState.comparables.push(action.payload);
            return newState;
        case 'REMOVE_COMP':
            return ({comparables : state.comparables.splice(action.payload)});
        case 'ADD_MARKET':
            newState.market = action.payload;
            return newState;
        default:
            return state;
    }
}

export default report;