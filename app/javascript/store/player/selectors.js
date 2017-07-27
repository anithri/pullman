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

export const playersById = state => state.players.all

export const allPlayers = createSelector(
  [playerOrder, playersById],
  (playerArr, players) => playerArr.map(playerId => players[playerId])
)

export const playersBySeat = createSelector(
  [allPlayers],
  playersArr => {
    const bySeat = {}
    playersArr.forEach(player => {
      bySeat[player.seat] = player
    })
    return bySeat
  }
)

export const currentPlayerId = state => state.players.turnOrder[0]

export const currentNames = createSelector(
  [allPlayers],
  players => players.map(p => p.name)
)

export const currentReadied = createSelector(
  [allPlayers],
  players => players.map(p => p.isReady)
)

export const currentSkins = createSelector(
  [allPlayers],
  players => players.map(p => p.skin)
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

export const playerBySeat = (seat) => {
  return createSelector(
    [playersBySeat],
    (players) => {
      return {
        ...players[seat]
      }
    }
  )
}

export const allReadied = createSelector(
  [currentReadied],
  readyArr => readyArr.every(r => !!r)
)







