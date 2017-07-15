import { createSelector }  from 'reselect'

export const allPlayers = state => state.players.all
export const currentPlayerId = state => state.players.current
export const playersById = createSelector(
  [allPlayers],
  (playerArr) => {
    const out = {}
    playerArr.forEach(player => out[player.id] = player)
    return out
  }
)

export const currentPlayer = createSelector(
  [playersById, currentPlayerId],
  (players, id) => players[id]
)

export function playerById(playerId) {
  return createSelector(
    [playersById],
    players => players[playerId]
  )
}






