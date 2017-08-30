import {createSelector} from 'reselect'
import {cardsById} from 'store/card/selectors'

export const gameBoard = (state) => state.board

export const cityRegion = (state) => state.board.regions.city
export const borderRegion = (state) => state.board.regions.border
export const frontierRegion = (state) => state.board.regions.frontier
export const wildernessRegion = (state) => state.board.regions.wilderness
export const lairRegion = (state) => state.board.regions.lair

export const allRegions = createSelector(
  [cardsById, cityRegion, borderRegion, frontierRegion, wildernessRegion, lairRegion],
  (cards, city, border, frontier, wilderness, lair) => {
    return ({
      city,
      border,
      frontier,
      wilderness,
      lair
    })
  }
)