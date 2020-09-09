import {createAction, handleActions} from "redux-actions";

export const defaultState = {
  score: 0,
  audioIndex: 0,
  audioSrc: "",
  isAudioPlayed: false,
  isAudioPlaying: false,
  birdsData: [],
  selectedBird: null,
  incorrectAnswers: [],
  isAnswerCorrect: false,
  levelsCompleted: 0,
}

export const setAudioIndex = createAction("SET_AUDIO_INDEX", audioIndex => audioIndex)
export const setAudioSrc = createAction("SET_AUDIO_SRC", audioSrc => audioSrc)
export const setAudioPlayed = createAction('SET_AUDIO_PLAYED',isAudioPlayed => isAudioPlayed)
export const setAudioPlaying = createAction('SET_AUDIO_PLAYING', isAudioPlaying => isAudioPlaying)
export const setBirdsData = createAction('SET_BIRDS_DATA', birdsData => birdsData)
export const setSelectedBird = createAction('SET_SELECTED_BIRD', selectedBird => selectedBird);
export const goToNextLevel = createAction('GO_TO_NEXT_LEVEL')
export const tryAgain = createAction('TRY_AGAIN')

export const rootReducer = handleActions({
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
  [setBirdsData.toString()]: (state, {payload: birdsData}) => ({
    ...state,
    birdsData,
  }),
  [setSelectedBird.toString()]: (state, {payload}) => ({
    ...state,
    selectedBird: payload,
    isAnswerCorrect: getIsAnswerCorrect(state, payload.audio === state.audioSrc),
    incorrectAnswers: getIncorrectAnswersArray(
        getIsAnswerCorrect(state, payload.audio === state.audioSrc),
        state.incorrectAnswers,
        payload
    ),
    score: getScore(
        state,
        getIsAnswerCorrect(state, payload.audio === state.audioSrc)
    )
  }),
  [goToNextLevel.toString()]: (state) => ({
    ...state,
    audioIndex: state.audioIndex + 1,
    isAudioPlayed: false,
    isAudioPlaying: false,
    selectedBird: null,
    incorrectAnswers: [],
    isAnswerCorrect: false,
    levelsCompleted: state.levelsCompleted + 1
  }),
  [tryAgain.toString()]: () => defaultState,
}, defaultState)

function getScore({score, isAnswerCorrect, incorrectAnswers, audioIndex,birdsData}, isAnswerCorrectComputed) {
  if (isAnswerCorrect === false && isAnswerCorrectComputed === true) {
    return score + Math.max((birdsData[audioIndex].length - 1) - incorrectAnswers.length, 0);
    /*
    * if 0 incorrect answers -> update score by 5
    * if 1 incorrect answer -> update score by 4
    * if 2 incorrect answers -> update score by 3
    * if 3 incorrect answer -> update score by 2
    * if 4 incorrect answer -> update score by 1
    * if 5 incorrect answer -> update score by 0
    * */
  }
  return score
}

function getIsAnswerCorrect({isAnswerCorrect}, isAnswerCorrectComputed) {
  return isAnswerCorrect || isAnswerCorrectComputed
}

/*
* handleActions({
*   [action.toString()]: (state, action) => ({
*     ...state,
*     stateField1: action.payload, // simple field update
*     stateField2: action.payload === true, // computed value is set
*   })
* }, defaultState)
*
* equals to
*
* function(state = defaultState, action) {
*   switch (action.type) {
*     case action1.toString():
*       return {
*         ...state,
*         stateField1: action.payload, // simple field update
*         stateField2: action.payload === true, // computed value is set
*       }
*     default:
*       return state
*   }
* }
*
* */

/*
* { 1: 1 } // field name is of type number
* { '1': 1 } // field name is of type string
* { [Date.now()]: 1 } // field name is result of JS expression computation
* */

function getIncorrectAnswersArray(isAnswerCorrect, incorrectAnswers, answer) {
  if (isAnswerCorrect || incorrectAnswers.includes(answer.id)) {
    return incorrectAnswers
  }
  return incorrectAnswers.concat(answer.id)
}

/*
* {...state, isAnswerCorrect: true} === Object.assign(state, {isAnswerCorrect: true})
* */