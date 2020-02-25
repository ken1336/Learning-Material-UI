import { TEST_API_CALL } from "../actions/index";


const initialState = {
    data: "",
}
export default function TestAPICallReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_API_CALL:
        
      return {
        
        ...state,
        data: action.data
      };
    default:{
        
        return state
    }
      
  }
}
