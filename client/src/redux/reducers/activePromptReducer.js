const initialState = {
    activePrompt : 0
}

const activePrompt = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PROMPT':
            return ({activePrompt : state.activePrompt + 1});
        case 'LAST_PROMPT':
            return ({activePrompt : state.activePrompt - 1});
        case 'JUMP_TO_PROMPT':
            return ({activePrompt : action.payload});
        default:
            return state;
    }
}

export default activePrompt;