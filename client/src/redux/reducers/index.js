import { combineReducers } from 'redux'     
import report from './reportReducer';
import activePrompt from './activePromptReducer';

//import all individual reducers and combine into the root reducer
const rootReducer = combineReducers({
  report : report,
  activePrompt : activePrompt
})

export default rootReducer;