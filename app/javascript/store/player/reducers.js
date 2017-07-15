// Constants

export const constants = {
}
// Action Creators
export const actions = {
}

// Reducer
export const defaultState = {
  current: 'player-1',
  all: [
    {
      playerId: 1,
      id: 'player-1',
      name: 'Warlord',
      order: 1
    },
    {
      playerId: 2,
      id: 'player-2',
      name: 'Arch Mage',
      order: 2
    },
    {
      playerId: 3,
      id: 'player-3',
      name: 'Hierarch',
      order: 3
    },
    {
      playerId: 4,
      id: 'player-4',
      name: 'Bandit King',
      order: 4
    }
  ]
}

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
