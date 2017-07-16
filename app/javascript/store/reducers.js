import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'

import appReducer from 'store/app/reducers'
import playerReducer from 'store/player/reducers'
import summaryReducer from 'store/summary/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app: appReducer,
    players: playerReducer,
    summary: summaryReducer,
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
