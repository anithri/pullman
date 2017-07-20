import {actions as messageActions} from 'store/messages/reducers'
import { push } from 'react-router-redux'

// Constants

const START_GAME = 'cards/game/start'

export const constants = {
  START_GAME
}


const startGame = () => {
  return (dispatch) => {
    dispatch(messageActions.addMessage("Game is Started"))
    dispatch(push('/game/start'))
  }
}

// Action Creators
export const actions = {
  startGame

}

// Reducer
export const defaultState = {
}

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
