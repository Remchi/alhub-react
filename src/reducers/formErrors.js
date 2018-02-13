import { CREATE_USER_FAILURE, CREATE_USER_REQUEST } from "../types";

export default function formErrors(state = {}, action = {}) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { ...state, signup: {} };
    case CREATE_USER_FAILURE:
      return { ...state, signup: action.errors };
    default:
      return state;
  }
}
