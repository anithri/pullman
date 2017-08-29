import {put, race, call, take} from 'redux-saga/effects'
import {GAME} from '../reducers'
import {PLAYER} from 'store/player/reducers'
import {actions as message} from 'store/messages/reducers'

function* updatePlayer(attr) {
  yield call(PLAYER.update, attr)
}

export function* gameRestartSaga () {
  yield put(PLAYER.resetAll())
  yield put(PLAYER.assignPersonas())
  yield put(message.add('Clearing the Board'))
}

function* watchGameRestart () {
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

export default watchGameRestart
