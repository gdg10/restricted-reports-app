const initialState = {
    reports : []
};

const allReports = (state = initialState, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_REPORT':
            newState.reports.push(action.payload);
            return newState;
        case 'REMOVE_REPORT':
            newState.reports.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}

export default allReports;