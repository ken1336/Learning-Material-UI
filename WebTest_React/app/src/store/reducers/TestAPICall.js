import { TEST_API_CALL } from "../actions/index";

const initialState = {
    data: "",
}
export default function TestAPICallReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_API_CALL:
        console.log('state:', state)
      return {
        
        ...state,
        data: action.data
      };

    default:{
        console.log('state:', state)
        return state
    }
      
  }
}
