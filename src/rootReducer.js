import { combineReducers } from "redux";

import user from "./reducers/user";
import locale from "./reducers/locale";

export default combineReducers({
  user,
  locale
});
