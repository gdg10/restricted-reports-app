const initialState = {
    reports : [
        {
            address : '3409 Parkview Ave, Pittsburgh PA, 15213',
            status : 'Published',
            completion : '100%',
            link : 'www.google.com'
        },
        {
            address : '1932 Josephine St, Pittsburgh PA, 15203',
            status : 'Published',
            completion : '100%',
            link : 'www.google.com'
        },
    ]
};

const activeReport = (state = initialState, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_REPORT':
            newState.reports.push(action.payload);
            return newState;
        case 'CLEAR_REPORT':
            // TODO: clear
            return newState;
        default:
            return state;
    }
}

export default activeReport;