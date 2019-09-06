const initialState = {
    activeReport: null    //default to no active report
}

const activeReport = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_ACTIVE_REPORT':
            return ({ activeReport: action.payload });       // Set to payload
        case 'CLEAR_ACTIVE_REPORT':
            return ({ activeReport: null });                 // Clear to null
        default:
            return state;
    }
}

export default activeReport;