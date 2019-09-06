import { combineReducers } from 'redux';     
import report from './reportReducer';
import activePrompt from './activePromptReducer';
import wizard from "./wizardReducer";
import activeReport from './activeReportReducer';

//import all individual reducers and combine into the root reducer
const rootReducer = combineReducers({
  report : report,
  wizard : wizard,
  activePrompt : activePrompt,
  activeReport : activeReport
})

export default rootReducer;