import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {constants as gameConstants} from './reducers'

export function* helloSaga() {
  console.log('Hello Player Sagas!')
}

function* gameStartSaga(action) {
  console.log('gameStartSaga',action)
}

function* watchGameStart() {
  yield takeEvery(gameConstants.START_GAME, gameStartSaga)
}

function* gameSaga() {
  yield all([
    helloSaga(),
    watchGameStart()
  ])
}

export default gameSaga
