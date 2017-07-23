import createSagaMiddleware, { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import "regenerator-runtime/runtime"

import {helloSaga} from 'store/player/sagas'

export function* consoleLog(action) {
  console.log('saga-logging', action)
  // yield put({ type: 'LOGGED' })
}

export function* watchConsoleLog() {
  yield takeEvery('*', consoleLog)
}

function* rootSaga() {
  yield all([
    helloSaga(),
    watchConsoleLog()
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

// rest unchanged