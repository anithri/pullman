import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {constants as gameConstants} from './reducers'
import { push } from 'react-router-redux'

export function* helloSaga() {
  console.log('Hello Game Sagas!')
}

function* gameStartSaga(action) {
  console.log('gameStartSaga',action)
  yield put(push('/game/start'))
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
