import {actions as messageActions} from 'store/messages/reducers'
import actionCreator, {constCreator} from 'utils/actionCreator'

const defaultActions = ['start','quit','ready','restart','init']
export const constants = constCreator('cards/game/', defaultActions)
const C = constants

const start = actionCreator.onlyType(C.START)
const isReady = actionCreator.singleVal(C.READY,'isReady')
const quit = actionCreator.onlyType(C.QUIT)
const init = actionCreator.onlyType(C.RESTART)
const restart = actionCreator.onlyType(C.RESTART)

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
    case C.RESTART: {
      return {...defaultState}
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
