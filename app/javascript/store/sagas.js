import createSagaMiddleware, { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import "regenerator-runtime/runtime"

import playerSaga from 'store/player/sagas'
import gameSaga from 'store/game/sagas'
import messagesSaga from 'store/messages/sagas'

function* rootSaga() {
  yield all([
    playerSaga(),
    gameSaga(),
    messagesSaga()
  ])
}

const makeRootSaga = () => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    middleware: sagaMiddleware,
    run: () => sagaMiddleware.run(rootSaga)
  }
}

export default makeRootSaga
