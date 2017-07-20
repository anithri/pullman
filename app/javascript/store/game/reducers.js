import {actions as messageActions} from 'store/messages/reducers'
import { push } from 'react-router-redux'

// Constants

const START_GAME = 'cards/game/start'

export const constants = {
  START_GAME
}


const startGame = () => {
  return (dispatch) => {
    dispatch({
      type: START_GAME
    })
    dispatch(messageActions.addMessage("Game is Started"))
    // InitGame here
    dispatch(push('/game/start'))
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
}

export default function (state = defaultState, action) {
  console.log('game reducer',action)
  switch (action.type) {
    default:
      return state
  }
}
