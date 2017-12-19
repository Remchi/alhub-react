import { createSelector } from "reselect";

export default function characters(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const charactersHashSelector = state => state.characters;

export const charactersSelector = createSelector(charactersHashSelector, hash =>
  Object.values(hash)
);
