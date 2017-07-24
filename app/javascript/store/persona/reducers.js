import defaultPersona from './defaults'

export const constants = {
}
// Action Creators
export const actions = {
}

// Reducer
export const defaultState = {
  all: defaultPersona()
}

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
