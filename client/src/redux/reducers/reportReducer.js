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

    exposureTimeMin: '',
    exposureTimeMax: '',
    exposureComplete: false,

    minVal: '',
    maxVal: '',
    rec: '',
    valueComplete: false,

    createDate: '',
    effectiveDate: '',
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

        case 'ADD_SCOPE':
            newState.scope = action.payload;
            newState.scopeComplete = true;
            return newState;
            
        case 'ADD_CONDITIONS':
            newState.conditions = action.payload;
            newState.conditionsComplete = true;
            return newState;

        case 'ADD_EXPOSURE':
            newState.exposureTimeMin = action.payload.eMin;
            newState.exposureTimeMax = action.payload.eMax;
            newState.exposureComplete = true;
            return newState;

        case 'ADD_VALUE':
            newState.minVal = action.payload.minVal;
            newState.maxVal = action.payload.maxVal;
            newState.rec = action.payload.rec;
            newState.valueComplete = true;
            return newState;
        
        case 'ADD_DATE':
            newState.createDate = action.payload.createDate;
            newState.effectiveDate = action.payload.effectiveDate;
            newState.dateComplete = true;
            return newState;

        case 'ADD_SOURCES':
            newState.sources = action.payload;
            newState.sourcesComplete = true;
            return newState;

        default:
            return state;
    }
}

export default report;