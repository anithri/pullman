import _ from 'lodash'
import {getPlayersFor} from './defaults'
import actionCreator, {constCreator} from 'lib/actionCreator'
import {allPersonas} from 'store/persona/selectors'
import {seats} from 'store/game/defaults'

const defaultActions = [
  'update'
]

const DEFAULT_IDS = ['alpha', 'beta', 'gamma', 'delta']

export const constants = constCreator('cards/player/', defaultActions)
const C = constants
// Action Creator

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
  update
}

export const PLAYER = {...constants, ...actions}

// Reducer
export const defaultState = {
  turnOrder: DEFAULT_IDS,
  all: getPlayersFor(DEFAULT_IDS)
}

const insertPlayer = (currentState, newPlayer, attrs) => {
  if (newPlayer) {
    console.log('updating',newPlayer, attrs)
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
    console.error('player/reducer','no player found', attrs)
    return currentState
  }
}

export default function (state = defaultState, action) {
  const p = action.playerId ? state.all[action.playerId] : null

  switch (action.type) {
    case C.UPDATE:
      console.log('reducing', p, action)
      return insertPlayer(state, p, action.updates)
    default:
      return state
  }
}
