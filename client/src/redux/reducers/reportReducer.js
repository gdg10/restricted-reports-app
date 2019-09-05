const initialState = {
    client : '',
    subject : '',
}

const report = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIENT':
            return ({client : action.payload});
        case 'ADD_SUBJECT':
            return ({subject : action.payload});
        default:
            return state;
    }
}

export default report;