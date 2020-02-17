
import { combineReducers } from 'redux';
import TestAPICallReducer from './TestAPICall';
const rootReducer = combineReducers({
    Testing: TestAPICallReducer,
  });
  
  export default rootReducer;