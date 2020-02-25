import { PUT_API_CALL,FETCH_API_CALL } from "../actions/index";


const initialState = {
    data: "",
}
export default function CardAPICallReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_API_CALL:
      console.log('status:',state)
      return{
        ...state,
        data: action.data
      }
    case FETCH_API_CALL:
      console.log('status:',state);
      console.log("data:", action);
      return{
          ...state,
          data:action.data
      }
    default:{
        console.log('state:', state)
        return state
    }
      
  }
}
