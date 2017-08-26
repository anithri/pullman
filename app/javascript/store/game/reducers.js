import {actions as messageActions} from 'store/messages/reducers'
import actionCreator, {constCreator} from 'lib/actionCreator'

const defaultActions = ['start','quit','ready','restart','init']
export const constants = constCreator('cards/game/', defaultActions)
const C = constants

const isReady = actionCreator.singleVal(C.READY,'isReady')
const quit = actionCreator.onlyType(C.QUIT)
const init = actionCreator.onlyType(C.RESTART)
const restart = actionCreator.onlyType(C.RESTART)

const start = () => {
  return {
    type: C.START,
    startedAt: new Date().toJSON()
  }
}
// Action Creators
export const actions = {
  start,quit,isReady,init,restart
}

// Reducer
export const defaultState = {
  startedAt: null,
  isReady: false
}

export const GAME = {...actions, ...constants}

export default function (state = defaultState, action) {
  switch (action.type) {
    case C.READY:
      return {
        ...state,
        isReady: action.isReady
      }
    case C.START: {
      return {
        ...defaultState,
        startedAt: action.startedAt
      }
    }
    case C.INIT: {
      return {
        ...state,
        startedAt: new Date().toJSON()
      }
    }
    default:
      return state
  }
}
