const MAX_INDEX = 9;    //There are 10 prompts to toggle through
const MIN_INDEX = 0;

const initialState = {
    activePrompt : 0    //Default to first prompt
}

const activePrompt = (state = initialState, action) => {
    //Toggle Active Prompt (Check bounds first)
    switch (action.type) {
        case 'NEXT_PROMPT':
            if(state.activePrompt < MAX_INDEX){
                return ({activePrompt : state.activePrompt + 1});
            }else{
                return state;
            }
        case 'LAST_PROMPT':
                if(state.activePrompt > MIN_INDEX){
                    return ({activePrompt : state.activePrompt - 1});
                }else{
                    return state;
                }
        case 'JUMP_TO_PROMPT':
                if(state.activePrompt >= MIN_INDEX && state.activePrompt <= MAX_INDEX){
                    return ({activePrompt : state.activePrompt - 1});
                }else{
                    return state;
                }
            return ({activePrompt : action.payload});
        default:
            return state;
    }
}

export default activePrompt;