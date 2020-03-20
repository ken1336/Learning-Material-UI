import { TEST_API_CALL } from "../actions/CalendarAction";

const initialState = {
  data: null
};
export default function CalendarAPIReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_API_CALL:
      return {
        ...state,
        data: action.data
      };
    default: {
      return state;
    }
  }
}