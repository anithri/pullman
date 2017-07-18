import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'
// pages are to screens as containers are to components
import appReducer from 'store/app/reducers'
import playerReducer from 'store/player/reducers'
// import gameReducer from 'store/game/reducers'
// import phasesReducers from 'store/phases/reducers'
// import summaryReducer from 'store/summary/reducers'
import messagesReducer from 'store/messages/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app: appReducer,
    players: playerReducer,
    // game: gameReducer,
    // phases: phasesReducers,
    // summary: summaryReducer,
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
