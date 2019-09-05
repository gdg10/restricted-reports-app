import { combineReducers } from 'redux'     
import report from './reportReducer';

//import all individual reducers and combine into the root reducer
const rootReducer = combineReducers({
  report : report
})

export default rootReducer;