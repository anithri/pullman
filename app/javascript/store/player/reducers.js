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
  turnOrder: ['player-1', 'player-2', 'player-3', 'player-4'],
  all: [
    {
      playerId: 1,
      id: 'player-1',
      name: 'Warlord'
    },
    {
      playerId: 2,
      id: 'player-2',
      name: 'Arch Mage'
    },
    {
      playerId: 3,
      id: 'player-3',
      name: 'Hierarch'
    },
    {
      playerId: 4,
      id: 'player-4',
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
