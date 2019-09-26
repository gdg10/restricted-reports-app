var initialState = {
    view : 1
}

const createView = (state = initialState, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_CREATE_VIEW':
            newState.view = action.payload;
            return newState;
        default:
            return state;
    }
}

export default createView;