import { combineReducers } from "redux";

import user from "./reducers/user";
import characters from "./reducers/characters";
import locale from "./reducers/locale";
import formErrors from "./reducers/formErrors";

export default combineReducers({
  user,
  characters,
  locale,
  formErrors
});
