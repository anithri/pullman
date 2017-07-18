import {actions as messageActions} from 'store/messages/reducers'
// Constants
const PHASE_CHANGED = 'cards/phases/changed'

export const constants = {
  PHASE_CHANGED
}

// Action Creators
const changePhase = (phase) => {
  const {next} = this.phase
  return (dispatch) => {
    phase.postActions.forEach(action => dispatch(action.handle(phase)))
    dispatch({type: PHASE_CHANGED, phaseId: next.id})
    next.preActions.forEach(action => dispatch(action.handle(phae)))
  }
}

const handlePhase = phase => {
  return (dispatch) => {
    // Start of Phase


    // End of Phase
  }
}

export const actions = {
  changePhase
}

// Reducer
export const defaultState = {
  phase: inBox
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case PHASE_CHANGED:
      return {
        ...state,
        phase: action.newPhase
      }
    default:
      return state
  }
}
