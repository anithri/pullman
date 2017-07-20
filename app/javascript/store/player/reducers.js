// Constants
const PLAYER_TURN_ENDED = 'card/player/player_turn_ended'

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
  current: 'player-1',
  turnOrder: ['alpha', 'beta', 'gamma', 'delta'],
  all: [
    {
      id: 'alpha',
      name: 'Warlord'
    },
    {
      id: 'beta',
      name: 'Arch Mage'
    },
    {
      id: 'gamma',
      name: 'Hierarch'
    },
    {
      id: 'delta',
      name: 'Bandit King'
    }
  ]
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
