const MAX_PROG = 100;               //100% is max
const MIN_PROG = 0;                 //0% is min
const PROMPT_COUNT = 10;            //ten prompts total
const INC = 100 / PROMPT_COUNT;     //size of increment is dependent on # of prompts

const initialState = {
    progress: 20    //Default to 0%
}

const activePrompt = (state = initialState, action) => {
    //Update progress meeter (but check bounds first)
    switch (action.type) {
        case 'INCR_PROG':
            if (state.progress < MAX_PROG) {
                return ({ progress: state.progress + INC });
            } else {
                return state;
            }
        case 'DEC_PROG':
            if (state.progress > MIN_PROG) {
                return ({ progress: state.progress - INC });
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default activePrompt;