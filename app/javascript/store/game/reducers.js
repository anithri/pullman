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

// const quitGame = () => {
//   return (dispatch) => {
//     dispatch(messageActions.addMessage('QuitGame'))
//     // destroyGame here
//     // dispatch(push('/game'))
//   }
// }

// Action Creators
export const actions = {
  startGame,
}

// Reducer
export const defaultState = {
  gameStartedAt: null,
}

export default function (state = defaultState, action) {
  console.log('game reducer',action)
  switch (action.type) {
    case START_GAME:
      return {
        gameStartedAt: action.gameStartedAt
      }
    default:
      return state
  }
}
