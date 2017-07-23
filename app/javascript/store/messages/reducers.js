// Constants

const MESSAGE_ADDED = 'cards/messages/message_added'
export const constants = {
  MESSAGE_ADDED
}
// Action Creators



const addMessage = (newMessage) => {
  return {
    type: MESSAGE_ADDED,
    newMessage
  }
}

export const actions = {
  addMessage
}

// Reducer
export const defaultState = {
  all: ['Welcome!'],
  visibleCount: 5
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case MESSAGE_ADDED:
      return {
        ...state,
        all: [
          ...state.all,
          action.newMessage
        ]
      }
    default:
      return state
  }
}
