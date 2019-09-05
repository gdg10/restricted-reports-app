const initialState = {
    client : ''
}

const report = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIENT':
            return ({client : action.payload});
        default:
            return state;
    }
}

export default report;