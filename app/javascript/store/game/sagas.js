import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {constants as gameConstants,
        actions as gameActions } from './reducers'
import {actions as message} from 'store/messages/reducers'
import { push } from 'react-router-redux'

export function* helloSaga() {
  console.log('Hello Game Sagas!')
}

function* gameStartSaga(action) {
  yield put(push('/game/start'))
  yield put(message.add('Getting the Game ready'))
  yield delay(Math.random() * 2000)
  yield put(message.add('Randomizing everything'))
  yield delay(Math.random() * 2000)
  yield put(message.add('Seating the players'))
  yield delay(Math.random() * 2000)
  yield put(message.add('Setting up the board'))
  yield delay(Math.random() * 2000)
  yield put(message.add('Final Touches'))
  yield delay(Math.random() * 2000)
  yield put(gameActions.isReady())
}

function* watchGameStart() {
  yield takeEvery(gameConstants.START, gameStartSaga)
}

function* gameSaga() {
  yield all([
    helloSaga(),
    watchGameStart()
  ])
}

export default gameSaga
