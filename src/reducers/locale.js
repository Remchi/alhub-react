import { LOCALE_SET } from "../types";

export default function locale(state = { lang: "en" }, action = {}) {
  switch (action.type) {
    case LOCALE_SET:
      return { lang: action.lang };
    default:
      return state;
  }
}
