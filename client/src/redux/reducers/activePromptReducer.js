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
                return ({activePrompt : state.activePrompt + 1}); //increment if within bounds
            }else{
                return ({activePrompt : 0}); //otherwise, wrap around to beginning
            }
        case 'LAST_PROMPT':
                if(state.activePrompt > MIN_INDEX){
                    return ({activePrompt : state.activePrompt - 1}); //decrement if withinbounds
                }else{
                    return ({activePrompt : 9}); //otherwise, wrap around to end
                }
        case 'JUMP_TO_PROMPT':
            return ({activePrompt : action.payload});
        default:
            return state;
    }
}

export default activePrompt;