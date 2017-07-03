import { createSelector } from 'reselect'

const gamesList = state => Object.values(state.games.items)

const gamesCount = createSelector(
  gamesList,
  gamesArr => gamesArr.length
)

export {
  gamesList,
  gamesCount
}
