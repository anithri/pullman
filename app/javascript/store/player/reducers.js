import {getPlayersFor} from './defaults'

// Constants
const PLAYER_TURN_ENDED = 'card/player/player_turn_ended'
const DEFAULT_PLAYER_IDS = ['alpha', 'beta', 'gamma', 'delta']

export const constants = {
  PLAYER_TURN_ENDED
}

// Action Creators

export const endPlayerTurn = () => {
  return {type: PLAYER_TURN_ENDED}
}

export const actions = {
  endPlayerTurn
}



// Reducer
export const defaultState = {
  turnOrder: DEFAULT_PLAYER_IDS,
  all: getPlayersFor(DEFAULT_PLAYER_IDS)
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case PLAYER_TURN_ENDED:
      const currentOrder = state.turnOrder
      const turnOrder = [...currentOrder.slice(1),currentOrder[0]]
      return {...state, turnOrder}
    default:
      return state
  }
}
