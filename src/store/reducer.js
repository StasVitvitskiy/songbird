import {createActions} from "redux-actions";

export const defaultState = {
  random: 0,
  page: 0,
  id: 0,
  select: false,
  win: false,
  score: 0,
  step: 0,
  gameEnd: false
}

export const appActions = createActions({
  SET_BIRD_IMG:(birdImg) => ({birdImg}),
})

export const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case appActions.setBirdImg.toString():
      return {
        ...state,
        ...action.payload,
      }
  }
  return state;
}