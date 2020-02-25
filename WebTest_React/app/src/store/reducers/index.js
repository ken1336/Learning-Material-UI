
import { combineReducers } from 'redux';
import TestAPICallReducer from './TestAPICall';
import CardAPICallReducer from './CardAPICall';
const rootReducer = combineReducers({
    Testing: TestAPICallReducer,
    CardIO:CardAPICallReducer,
  });
  
  export default rootReducer;