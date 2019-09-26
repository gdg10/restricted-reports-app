import { combineReducers } from 'redux';
import report from './reportReducer';
import activePrompt from './activePromptReducer';
import wizard from "./wizardReducer";
import activeReport from './activeReportReducer';
import allReports from "./allReportsReducer";
import createView from './createViewReducer';

//import all individual reducers and combine into the root reducer
const rootReducer = combineReducers({
  report: report,
  activeReport: activeReport,
  allReports: allReports,
  wizard: wizard,
  activePrompt: activePrompt,
  createView : createView
})

export default rootReducer;