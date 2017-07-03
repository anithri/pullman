import { createSelector } from 'reselect'

const gameItems = state => state.games.items

const gameList = createSelector(
  gameItems,
  items => Object.values(items) || []
)

const gameCount = createSelector(
  gameList,
  gameArr => gameArr.length
)

export {
  gameList,
  gameCount
}
