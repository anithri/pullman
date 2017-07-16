import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'

import appReducer from 'store/app/reducers'
import playerReducer from 'store/player/reducers'
import gameReducer from 'store/game/reducers'
import summaryReducer from 'store/summary/reducers'
import messagesReducer from 'store/messages/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app: appReducer,
    players: playerReducer,
    game: gameReducer,
    summary: summaryReducer,
    messages: messagesReducer,
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
