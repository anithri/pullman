import {put, call, take} from 'redux-saga/effects'
import {GAME} from '../reducers'
import {PLAYER} from 'store/player/reducers'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'

function* gameQuitSaga () {
  yield put(message.add('Quitting the Game'))
  yield put(GAME.restart())
  yield put(message.add('Resetting Players'))
  yield put(message.add('Resetting Board'))
}

function* watchGameQuit () {
  while (true) {
    yield take(GAME.QUIT)
    yield call(gameQuitSaga)
    yield put(push('/game'))
  }
}


export default watchGameQuit
