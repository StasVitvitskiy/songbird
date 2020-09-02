import {createAction, handleActions} from "redux-actions";

export const defaultState = {
  score: 0,
  audioIndex: 0,
  audioSrc: "",
  isAudioPlayed: false,
  isAudioPlaying: false,
  birdsData: []
}

export const setScore = createAction("SET_SCORE", score => score)
export const setAudioIndex = createAction("SET_AUDIO_INDEX", audioIndex => audioIndex)
export const setAudioSrc = createAction("SET_AUDIO_SRC", audioSrc => audioSrc)
export const setAudioPlayed = createAction('SET_AUDIO_PLAYED',isAudioPlayed => isAudioPlayed)
export const setAudioPlaying = createAction('SET_AUDIO_PLAYING', isAudioPlaying => isAudioPlaying)
export const setBirdsData = createAction('SET_BIRDS_DATA', birdsData => birdsData)

export const rootReducer = handleActions({
  [setScore.toString()]: (state, action) => ({
    ...state,
    score: action.payload,
  }),
  [setAudioIndex.toString()]: (state, {payload}) => ({
    ...state,
    audioIndex: payload,
  }),
  [setAudioSrc.toString()]: (state, {payload}) => ({
    ...state,
    audioSrc: payload,
  }),
  [setAudioPlayed.toString()]: (state, {payload}) => ({
    ...state,
    isAudioPlayed: payload,
  }),
  [setAudioPlaying.toString()]: (state, action) => ({
    ...state,
    isAudioPlaying: action.payload
  }),
  [setBirdsData.toString()]: (state, {payload}) => ({
    ...state,
    birdsData: payload
  })
}, defaultState)