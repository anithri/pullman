import {actions as messageActions} from 'store/messages/reducers'

// Constants

const START = 'cards/game/start'
const READY = 'cards/game/ready'

export const constants = {
  START,
  READY
}

const start = () => {
  return {
    type: START,
    startedAt: new Date().toJSON()
  }
}

const isReady = () => {
  return {
    type: READY,
    isReady: true
  }
}

// Action Creators
export const actions = {
  start,isReady
}

// Reducer
export const defaultState = {
  startedAt: null,
  isReady: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: action.startedAt
      }
    case READY:
      return {
        ...state,
        isReady: action.isReady
      }
    default:
      return state
  }
}
