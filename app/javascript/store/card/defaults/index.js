import boardCards from './board'
import personaCards from './persona'

export const masterCardList = {
  ...boardCards,
  ...personaCards
}

export const regionDefaults = {
  city: {
    left: [],
    center: ['InnHarmsWay'],
    right: []
  },
  frontier: {
    left: [],
    center: ['BorderKeep'],
    right: []
  },
  border: {
    left: [],
    center: ['BleakHills'],
    right: []
  },
  wilderness: {
    left: [],
    center: ['HiddenPass'],
    right: []
  },
  lair: {
    left: [],
    center: ['MenacingLair'],
    right: []
  },
}

