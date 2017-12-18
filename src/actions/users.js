import { USER_FETCHED } from "../types";
import api from "../api";
import { userLoggedIn } from "./auth";

export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const fetchCurrentUser = () => dispatch =>
  api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));
