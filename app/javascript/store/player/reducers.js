import _ from 'lodash'
import {getPlayersFor} from './defaults'
import actionCreator, {constCreator} from 'lib/actionCreator'
import {cleanPlayer} from './defaults'
import {allPersonas} from 'store/persona/selectors'
import {seats} from 'store/game/defaults'

const defaultActions = [
  'update',
  'reset/all',
  'reset/one'
]

const DEFAULT_IDS = ['alpha', 'beta', 'gamma', 'delta']

export const constants = constCreator('cards/player/', defaultActions)
console.log(constants)
const C = constants
// Action Creator
const resetAll = actionCreator.onlyType(C.RESET_ALL)
const resetOne = actionCreator.singleVal(C.RESET_ONE, 'playerId')

const update = (playerId, attrs) => {
  return {
    type: C.UPDATE,
    playerId,
    updates: {
      ...attrs,
      id: playerId
    }
  }
}

export const actions = {
  resetOne,
  update,
  resetAll
}

export const PLAYER = {...constants, ...actions}

// Reducer
export const defaultState = {
  turnOrder: DEFAULT_IDS,
  all: getPlayersFor(DEFAULT_IDS)
}


const insertPlayer = (currentState, newPlayer, attrs) => {
  if (newPlayer) {
    console.log('updating', newPlayer, attrs)
    return {
      ...currentState,
      all: {
        ...currentState.all,
        [newPlayer.id]: {
          ...newPlayer,
          ...attrs
        }
      }
    }
  } else {
    console.error('player/reducer', 'no player found', attrs)
    return currentState
  }
}

export default function (state = defaultState, action) {
  const p = action.playerId ? state.all[action.playerId] : null

  switch (action.type) {
    case C.UPDATE:
      console.log('reducing', p, action)
      return insertPlayer(state, p, action.updates)
    case C.RESET_ONE:
      return insertPlayer(state, p, cleanPlayer)
    default:
      return state
  }
}
