import { applyMiddleware, compose, createStore } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';

import makeRootReducer from 'store/reducers'

export default (initialState = {}) => {
  const middleware = [apiMiddleware]

  const enhancers = []

  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }
  return store
}
