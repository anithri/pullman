import {delay} from 'redux-saga'
import {put, race, call, take} from 'redux-saga/effects'
import {GAME} from '../reducers'
import {PLAYER} from 'store/player/reducers'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'
import {gameRestartSaga} from './restart'

function* updatePlayer(attr) {
  yield call(PLAYER.update, attr)
}

function* gameStartSaga () {
  yield put(push('/game/start'))
  yield put(GAME.init())
  yield gameRestartSaga()
  // yield put(PLAYER.shufflePersonas())
  // yield put(PLAYER.shuffleSeats())
  yield put(message.add('Getting the Game ready'))
  yield put(message.add('Final Touches'))
}

function* watchGameStart () {
  while (true) {
    yield take(GAME.START)
    const {response, cancel} = yield race({
      task: call(gameStartSaga),
      cancel: take(GAME.QUIT)
    })
    if (cancel) {
      yield put(GAME.isReady())
    }
  }
}

export default watchGameStart
