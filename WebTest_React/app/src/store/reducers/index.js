
import { combineReducers } from 'redux';
import TestAPICallReducer from './TestAPICall';
import CardAPICallReducer from './CardAPICall';
import CardCount from './CardCount';
import CalendarAPIReducer from './CalendarCall';
const rootReducer = combineReducers({
    Testing: TestAPICallReducer,
    CardData:CardAPICallReducer,
    Count:CardCount,
    Calendar:CalendarAPIReducer
  });
  
  export default rootReducer;