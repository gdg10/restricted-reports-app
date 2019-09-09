const initialState = {
    client: '',
    clientComplete: false,

    subject: {},
    subjectComplete: false,

    comparables: [],
    comparablesComplete: false,

    market: {},
    marketComplete: false,

    conditions: '',
    conditionsComplete: false,

    sources: '',
    sourcesComplete: false,

    exposure: '',
    exposureComplete: false,

    value: '',
    valueComplete: false,

    date: '',
    dateComplete: false,

    scope: '',
    scopeComplete: false,

}

const report = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_CLIENT':
            newState.client = action.payload;
            newState.clientComplete = true;
            return newState;
        case 'ADD_SUBJECT':
            newState.subject = action.payload;
            newState.subjectComplete = true;
            return newState;
        case 'ADD_COMP':
            newState.comparables.push(action.payload);
            return newState;
        case 'REMOVE_COMP':
            return ({ comparables: state.comparables.splice(action.payload) });
        case 'ADD_MARKET':
            newState.market = action.payload;
            newState.marketComplete = true;
            return newState;
        default:
            return state;
    }
}

export default report;