import { PUT_API_CALL, FETCH_API_CALL ,MOVE_API_CALL} from "../actions/index";


const initialState = {
  data: null,
}
export default function CardAPICallReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_API_CALL:

      return {
        ...state,
        data: action.data
      }
    case FETCH_API_CALL:

      return {
        ...state,
        data: action.data
      }
    case MOVE_API_CALL:
      return {
        ...state,
        data: action.data
      }
    default: {

      return state
    }

  }
}
