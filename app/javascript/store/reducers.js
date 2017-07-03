import { combineReducers } from 'redux'

import appReducer from 'store/app/reducer'
import gamesReducer from 'store/games/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app: appReducer,
    games: gamesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
