import { CARD_COUNTER } from "../actions/index";

const initialState = {
    id: 0,
}

export default function CardCountReducer(state = initialState, action) {  
    switch (action.type) {
      case CARD_COUNTER:
        
        return{
            ...state,
            id: state.id+1,
          }
      default:
        return state
    }
  }