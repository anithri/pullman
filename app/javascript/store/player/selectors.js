import {createSelector} from 'reselect'

const sortByOrder = (a, b) => {
  if (a.order < b.order) {
    return -1
  }
  if (a.order > b.order) {
    return 1
  }
  return 0
}

export const playerOrder = state => state.players.turnOrder

export const allPlayers = state => state.players.all

export const currentPlayerId = state => state.players.turnOrder[0]

export const playersById = createSelector(
  [allPlayers, playerOrder],
  (playerArr, currentOrder) => {
    const out = {}
    playerArr.forEach(player => {
      out[player.id] = player
      out[player.id]['order'] = currentOrder.indexOf(player.id)
    })
    return out
  }
)

export const currentPlayer = createSelector(
  [playersById, currentPlayerId],
  (players, id) => players[id]
)


export const playerById = (playerId) => {
  return createSelector(
    [playersById],
    (players) => {
      return {
        ...players[playerId]
      }
    }
  )
}






