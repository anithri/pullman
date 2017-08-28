import {masterCardList} from './defaults'
// Constants
// const SOMETHING_CHANGED = 'cards/card/something_changed'
export const constants = {}
// Action Creators
export const actions = {}

// Reducer
export const defaultState = {
  all: masterCardList
}

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
