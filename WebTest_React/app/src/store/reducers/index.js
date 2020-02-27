
import { combineReducers } from 'redux';
import TestAPICallReducer from './TestAPICall';
import CardAPICallReducer from './CardAPICall';
import CardCount from './CardCount';
const rootReducer = combineReducers({
    Testing: TestAPICallReducer,
    CardData:CardAPICallReducer,
    Count:CardCount,
  });
  
  export default rootReducer;