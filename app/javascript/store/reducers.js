import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'
import appReducer from 'store/app/reducers'
import playerReducer from 'store/player/reducers'
import gameReducer from 'store/game/reducers'

import messagesReducer from 'store/messages/reducers'
import personaReducer from 'store/persona/reducers'
import boardReducer from 'store/board/reducers'
import cardReducer from 'store/card/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app: appReducer,
    board: boardReducer,
    players: playerReducer,
    game: gameReducer,
    cards: cardReducer,
    messages: messagesReducer,
    persona: personaReducer,
    router: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

