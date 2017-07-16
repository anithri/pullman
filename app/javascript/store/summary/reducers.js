// Constants
const PHASE_TEXT_CHANGED = 'cards/summary/phrase_text_changed'
export const constants = {
  PHASE_TEXT_CHANGED
}
// Action Creators

const changePhraseText = (newText) => {
  return {
    type: PHASE_TEXT_CHANGED,
    newText
  }
}
export const actions = {
  changePhraseText
}

// Reducer
export const defaultState = {
  phaseText: 'Waiting To Start'
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case PHASE_TEXT_CHANGED:
      return {...state, phaseText: action.newText}
    default:
      return state
  }
}
