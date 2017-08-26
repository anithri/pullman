import {delay} from 'redux-saga'
import _ from 'lodash'
import {select, put, all, race, call, take} from 'redux-saga/effects'
import {GAME} from '../reducers'
import {PLAYER} from 'store/player/reducers'
import {seats} from '../defaults'
import {allPlayers} from 'store/player/selectors'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'

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
