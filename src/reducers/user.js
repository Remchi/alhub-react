import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED } from "../types";

export default function user(state = { loaded: false }, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_FETCHED:
      return { ...state, ...action.user, loaded: true };
    case USER_LOGGED_OUT:
      return { loaded: true };
    default:
      return state;
  }
}
