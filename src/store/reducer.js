import {createActions} from "redux-actions";

export const defaultState = {
  score: 0,
}

export const appActions = createActions({
  SET_SCORE:(score) => ({score}),
})

export const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case appActions.setScore.toString():
      return {
        ...state,
        ...action.payload,
      }
  }
  return state;
}