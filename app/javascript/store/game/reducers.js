import {actions as messageActions} from 'store/messages/reducers'
import { push } from 'react-router-redux'

// Constants

const START_GAME = 'cards/game/start'

export const constants = {
  START_GAME
}

const startGame = () => {
  return {
    type: START_GAME,
    gameStartedAt: new Date().toJSON()
  }
}

// Action Creators
export const actions = {
  startGame,
}

// Reducer
export const defaultState = {
  startedAt: null,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        startedAt: action.gameStartedAt
      }
    default:
      return state
  }
}
