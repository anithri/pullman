// Constants
const ADD = 'cards/messages/add'
export const constants = {
  ADD
}
// Action Creators



const add = (message) => {
  return {
    type: ADD,
    message
  }
}

export const actions = {
  add
}

// Reducer
export const defaultState = {
  all: ['Welcome!'],
  visibleCount: 10
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        all: [
          ...state.all,
          action.message
        ]
      }
    default:
      return state
  }
}
