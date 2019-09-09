const initialState = {};

const activeReport = (state = initialState, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_REPORT':
            newState.push(action.payload);
            return newState;
        case 'CLEAR_REPORT':
            // TODO: clear
            return newState;
        default:
            return state;
    }
}

export default activeReport;